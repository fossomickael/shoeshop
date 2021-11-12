import React from 'react';
import { connect } from 'react-redux';
import CartLine from './CartLine';
class CartDetail extends React.Component {


    renderCart = () => {
        if (this.props.cart.length === 0) {
            return (
                <div>You cart is empty</div>
            )
        }
        return (
            <div>
                {this.props.cart.map(item => {
                    return <CartLine itemId={item.id} key={item.id} />})}
                <button className="btn-checkout">Checkout</button>
            </div>
        )
    }
    render() {
        
        return (
            <div className="cart-detail">
                Cart
                <hr />
                {this.renderCart()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { cart: state.cart };
};


export default connect( mapStateToProps)(CartDetail);