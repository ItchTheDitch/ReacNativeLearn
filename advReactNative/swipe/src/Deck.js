import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';
//Dimensions's object is used to retrive the width or the height of the screen
    //that the app is running on currently


const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            //function will executed any time user taps on the screen(boolean)
            onStartShouldSetPanResponder: () => true,
            
            //this call back is called any time when user stars to drag their
            // finger around the screen
            onPanResponderMove: (event, gesture ) => {
                //dx dy => how far user move their finger 
                position.setValue( {x: gesture.dx , y: gesture.dy} );
            },  

            //is called any time when user let go their finger from screen
            onPanResponderRelease: () => {
                this.resetPosition();
            }
        });

        // we never call setState to update panResponder
        // panResponder is really its own self-contained object (we're not trying to update it in)
        // or this.panResponder = panResponder;
        this.state = { panResponder, position }; // offcial way to assign panResponder
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5 ],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]

        };
    }

    renderCards() {
        return this.props.data.map((item, index) => { // this.props.data from App.
            //animated only the first cards
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }
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