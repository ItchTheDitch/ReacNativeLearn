import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    //action creator returning function cause redux-thunk
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: 'LOGIN_USER SUCCESS', payload: user });
        });
    };
};
