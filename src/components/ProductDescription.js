import { connect } from 'react-redux';
import React from 'react';
class ProductDescription extends React.Component {
    render() {
        return (<div className="product-description">
            <h5>Sneaker Company</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low profile sneakers are you perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll whistand everything the weather 
            can offer</p>
            <p>$125.00 50%</p>
            <p>$250</p>
            <p>- 0 +<button>Add to cart</button></p>
        </div>
    )
    }

}

export default ProductDescription;