import { EMAIL_CHANGED, 
        PASSWORD_CHANGED, 
        LOGIN_USER_SUCCESS, 
        LOGIN_USER_FAIL, 
        LOGIN_USER 
} from '../actions/types';

const INITAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default(state = INITAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
        //Make New Object, Take all of the properties of my existing state object(...state) 
            // and throw them into that object
        // then define the email property given that value of action.payload (email:action.payload) 
            // and toss it on top of whatever properties were on that state object (...state)
        // if email or if state object (...state) already has an e-mail property
        // it will be overwritten by this one (email:action.payload)
            return { ...state, email: action.payload }; 
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            // return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
            return { ...state, ...INITAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            // if user fail login the input password will clear 
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        default:
            return state;
    }
};
