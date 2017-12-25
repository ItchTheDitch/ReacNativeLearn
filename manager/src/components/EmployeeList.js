import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';  
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component 
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render() {
        console.log(this.props);
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            
        );
    }
}

const mapStateToProps = state => {
    //state.employees is an object has many key value pairs
    // for each key value pair that iteration is done by .map()
    // will run this fat arrow function
    // after .map() execute this fat arrow function
    // takes all returned objects and stuffs them into an array 
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shfit: 'Monday', name: 'Ruby', id: '23eg34r43e'};
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

