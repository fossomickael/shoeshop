import { connect } from 'react-redux';
import React from 'react';
import { selectShoe } from '../actions';
import ReactDOM from 'react-dom';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';

class Gallery extends React.Component {

    render() {
        return ReactDOM.createPortal (
            <div className="gallery-images"><ProductImage /><ThumbnailList /></div>
        , document.querySelector('#gallery'))
    }
}

const mapStateToProps = state => {
    return { selectedShoe: state.selectedShoe };
};

export default connect(mapStateToProps, { selectShoe })(Gallery);