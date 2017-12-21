import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreator extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
                                                        // set default value
        this.props.employeeCreate({ name, phone, shift: shift || 'monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                                                //employeUpdate() is from EmployeeActions.js
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle} >Shift</Text>
                    <Picker 
                        selectedValue={this.props.shift}
                                    //value                                              //value
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = (state) => {
                                    // employeeForm from reducer (Index.js)
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};
                                        // from EmployeeAction.js (Action Creator)
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreator);
