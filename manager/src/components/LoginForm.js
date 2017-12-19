import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    // 
    onPasswordChange(text) {
        //passwordChanged from action creator (index.js)
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        // this props email password from mapStateToProps
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        // loading == true spinners is spin
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} >
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        //to get input value 
                        onChangeText={this.onEmailChange.bind(this)}
                        // this.props.email is from mapStateToProps
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
                        //(state)
const mapStateToProps = ({ auth }) => {
    // auth from reducer(index.js)              //state.auth
    const { email, password, error, loading } = auth;

    // email from (AuthReducer)
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
