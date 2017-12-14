import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        if (library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            );
        }

    }
    render() { 
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            // selectlibrary from actions creator
            <TouchableWithoutFeedback
                // this.props object now have selectLibrary argument from actions creator,
                //cause connect have actions argument
                //selectLibrary coming from actions creator function
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
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

const mapStateToProps = state => {
    // state.selectedLibraryId is from reducer
    return { selectedLibraryId: state.selectedLibraryId };
};

// null because there is no mapToProps()

//actions do 2 things:
//1. mutates this function into something special whenever its call
// then returned it, action will be automatically dispatched to the redux store

//2. take all of the actions that are inside the subject which just one in our case
// and passes them all to our component as PROPS
export default connect(mapStateToProps, actions)(ListItem);
