import {Reducer} from "redux";
import {LogInSuccessAction, LogInSuccessData, LogoutAction} from "../actions/user";

interface InitialState {
    isLoggingIn: boolean,
    data: LogInSuccessData | null
}
const initialState = {
    isLoggingIn: false,
    data: null,
};

const userReducer: Reducer<InitialState, LogInSuccessAction | LogoutAction> = (prevState = initialState, action) => { // 새로운 state 만들어주기
    // 또는 으로 타이핑되면 switch에서 타입가드가 잘 먹힌다.
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return {
                ...prevState,
                data: action.data,
            };
        case 'LOG_OUT':
            return {
                ...prevState,
                data: null,
            };
        default:
            return prevState;
    }
};

export default userReducer;
