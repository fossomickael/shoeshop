import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import close from '../assets/images/icon-close.svg';

class Gallery extends React.Component {

    galleryVisibility = () => {
        if (this.props.isVisible) {
            return "visible";
        }
        return "hide";
    }

    render() {
        return ReactDOM.createPortal (
            <div className={`${this.galleryVisibility()} gallery-images`} >
            <img src={close} alt="Close" onClick={this.props.onClick}/>
            <ProductImage />
            <ThumbnailList />
            </div>
        , document.querySelector('#gallery'))
    }
}



export default Gallery;