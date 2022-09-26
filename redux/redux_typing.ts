import {combineReducers, compose, legacy_createStore as createStore} from "redux";

const loginAction = { type: 'LOGIN'}
const anyAction = { type: 'example', data: '123' }

const initialState = {
    user: {
        isLoggingIn: false,
        data: null
    },
    posts: [],
}

const reducer = combineReducers({
    user: (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    isLoggingIn: true,
                    data: {
                        nickname: 'zerocho',
                        password: '1234'
                    }
                }
            default:
                return state
        }

    },
    posts: (state, action) => {
        switch (action.type) {
            case 'ADD_POST':
                return [...state, action.data]
            default:
                return state
        }
    }
})

const store = createStore(reducer, initialState)
store.dispatch({type: 'LOGIN'})
store.dispatch({type: 'ADD_POST', data: { title:'hello', content: 'redux' }})
