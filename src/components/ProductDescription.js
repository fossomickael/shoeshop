import { connect } from 'react-redux';
import React from 'react';

class ProductDescription extends React.Component {
    state = { quantity: 0};

    changeQuantity = (toadd) => {
       this.setState({ quantity: Math.max(0,this.state.quantity + toadd) });
    }

    render() {
        return (<div className="product-description">
            <h5>Sneaker Company</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low profile sneakers are you perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll whistand everything the weather 
            can offer</p>
            <p><span className="price">${this.props.price * this.state.quantity * this.props.discount}</span> <span className="discount">50% discount</span> </p>
            <p> <span className="reduction">${this.props.price} (unit price)</span></p>
            <p>
                <button className="btn-quantity" onClick={() => this.changeQuantity(-1 )}>-</button> 
                    <span className="quantity">{this.state.quantity} </span>
                <button className="btn-quantity" onClick={() => this.changeQuantity(1 )}>+</button>
                <button className="btn-add-cart">Add to cart</button>
            </p> 
        </div>
    )
    }

}

const mapStateToProps = state => {
    return { price: state.price, discount: state.discount };
  };

export default connect( mapStateToProps)(ProductDescription);