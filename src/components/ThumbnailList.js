import React, { Component } from 'react';
import selectShoe from '../actions';
import Thumbnail from './Thumbnail';
import { connect } from 'react-redux';

class ThumbnailList extends React.Component {
    render() {
        return (
            this.props.shoes.map(shoe => {
                return <Thumbnail shoe={shoe} />
            })
        )
    }

}

const mapStateToProps = state => {
    return { shoes: state.shoes };
  };

export default connect(mapStateToProps)(ThumbnailList);