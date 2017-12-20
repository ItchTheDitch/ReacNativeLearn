import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        // style most to the right will overwrithe style on the left
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        borderBottomWidth: 2,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
};

export { CardSection };
