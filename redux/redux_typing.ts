import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore, Middleware} from "redux";
import reducer from "./reducer";
import {logIn} from "./actions/user";
import {addPost} from "./actions/post";
import {ThunkMiddleware} from "redux-thunk";

const loginAction = { type: 'LOGIN'}
const anyAction = { type: 'example', data: '123' }

const initialState = {
    user: {
        isLoggingIn: false,
        loading: false,
        data: null
    },
    posts: [],
}

const firstMiddleware: Middleware = (store) => (next) => (action) => {
    console.log('로깅', action)
    next(action)
}

const thunkMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
}

const enhancer = applyMiddleware(
    firstMiddleware,
    thunkMiddleware as ThunkMiddleware
)

const store = createStore(reducer, initialState, enhancer)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

console.log('1st', store.getState());

store.dispatch(logIn({
    nickname: 'zerocho',
    password: 'qwer1234'
}))

store.dispatch(addPost({
    title: '제목',
    content: '두번째 리덕스'
}))

export { store };
