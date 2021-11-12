import React from 'react';
import { connect } from 'react-redux';
import CartDetail from './CartDetail';
class Navbar extends React.Component {

    state = { showDetails: false};

    cartQuantity = (cart) => {
        if (this.props.cart.length === 0)
        {
            return 0;
        }
        return cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
    }

    handleCartClick = () => {
        this.setState({ showDetails: !this.state.showDetails });
    }

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="brand">sneakers</li> 
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li> 
                    <li><a href="/">About</a></li>
                    <li className="cart">
                        <i className="fas fa-shopping-cart"  onClick={() => this.handleCartClick()}></i>
                            <div className="cart-quantity">{this.cartQuantity(this.props.cart)}
    
                            </div>
                            <div>{ this.state.showDetails ? <CartDetail /> : null }</div>
                        
                    </li>
                    
                </ul>
                
            </div>
        )
    }


}

const mapStateToProps = state => {
    return { cart: state.cart };
};


export default connect( mapStateToProps)(Navbar);