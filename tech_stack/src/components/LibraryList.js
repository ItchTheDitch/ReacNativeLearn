import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem 
            library={library}
        />;
    }
    
    render() {
        // props == libraries
        return (
        <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
        );
    }
}

// state is global state object > state ( take data inside redux store) > then map it to PROPS!!!
const mapStateToProps = state => {
    
    // sapi is reducer key passing LibraryReducer 
    return { libraries: state.sapi };
};

export default connect(mapStateToProps)(LibraryList);
