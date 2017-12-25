import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };  
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    //redux-thunk should be return function
    return (dispatch) => {
        //get references on very specific location in our database firebase
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            // to save into database store
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};

export const employeesFetch = () => {
        // dispatch is method
        const { currentUser } = firebase.auth();
    
        return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            //any time we get any 'value' , call this function (snapshot)
            //snapshot => is not an array of employees, its an object that describe the data
            //we can use to handle employees 
            .on('value', snapshot => {
                                                // snapshot.val() => how we actually get access the data
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
