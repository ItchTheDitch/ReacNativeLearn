import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    UIManager, 
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// UIManager from NativeModules (see Q & A)
UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 15 }}>
                    {library.description}
                    </Text>
                </CardSection>
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
                //cause connect have actions argument line :82
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
// this ownProps is equal to this.props inside component
const mapStateToProps = (state, ownProps) => {
    // state.selectedLibraryId is from reducer
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

// null because there is no mapToProps(null,actons)

//actions do 2 things:
//1. mutates this function into something special whenever its call
// then returned it, action will be automatically dispatched to the redux store

//2. take all of the actions that are inside the subject which just one in our case
// and passes them all to our component as PROPS
export default connect(mapStateToProps, actions)(ListItem);
