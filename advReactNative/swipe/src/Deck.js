import React, { Component } from 'react';
import { View, Animated } from 'react-native';


class Deck extends Component {
    renderCards() {
        return this.props.data.map(item => { // this.props.data from App.
            return this.props.renderCard(item) //this.props.renderCard from App.js
        })
    }

    render () {
        return (
            <View>
                {this.renderCards()}
            </View>

        );
    }
}

export default Deck;