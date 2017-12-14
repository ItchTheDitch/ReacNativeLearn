import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    render() { 
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            // selectlibrary from actions creator
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// null because there is no mapToProps()

//actions do 2 things:
//1. mutates this function into something special whenever its call
// then returned it, action will be automatically dispatched to the redux store

//2. take all of the actions that are inside the subject which just one in our case
// and passes them all to our component as PROPS
export default connect(null, actions)(ListItem);
