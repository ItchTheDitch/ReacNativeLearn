import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreator from './components/EmployeeCreator';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() => Actions.employeeCreator()}
                        rightTitle="Add"
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        initial  
                    />

                    <Scene 
                        key="employeeCreator"
                        component={EmployeeCreator}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
