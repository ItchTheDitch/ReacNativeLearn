import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        // props == libraries
        console.log(this.props);
        return; 
    }
}

// state is global state object > state ( take data inside redux store) > then map it to PROPS!!!
const mapStateToProps = state => {
    
    // sapi is reducer key passing LibraryReducer 
    return { libraries: state.sapi };
};

export default connect(mapStateToProps)(LibraryList);
