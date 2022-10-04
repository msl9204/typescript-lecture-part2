import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import reducer from "./reducer";
import {logIn} from "./actions/user";

const loginAction = { type: 'LOGIN'}
const anyAction = { type: 'example', data: '123' }

const initialState = {
    user: {
        isLoggingIn: false,
        data: null
    },
    posts: [],
}

const firstMiddleware = () => (next) => (action) => {
    console.log('로깅', action)
    next(action)
}

const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
}

const enhancer = applyMiddleware(
    firstMiddleware,
    thunkMiddleware
)

const store = createStore(reducer, initialState, enhancer)

console.log('1st', store.getState());

store.dispatch(logIn({
    id: 1,
    name: 'zerocho',
    admin: true
}))
