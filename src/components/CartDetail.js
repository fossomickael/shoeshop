import React from 'react';
import { connect } from 'react-redux';
import CartLine from './CartLine';
class CartDetail extends React.Component {


 
    render() {
        return (
            <div className="cart-detail">
                Cart
                <hr />
                {this.props.cart.map(item => {
                    return <CartLine itemId={item.id} key={item.id} />
                })}
                <button className="btn-checkout">Checkout</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { cart: state.cart };
};


export default connect( mapStateToProps)(CartDetail);