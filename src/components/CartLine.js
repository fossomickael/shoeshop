import React from 'react';
import { connect } from 'react-redux';
import { searchItem } from "../actions/";

class CartLine extends React.Component {

    componentDidMount() {
        searchItem(this.props.itemId);
    }
    render() {
        if (!this.props.item) {
          return <div>Loading</div>
        }
        return (
            <div className="cart-line">
                
                <div>{this.props.item.title}</div>
                <div>
                {this.props.item.price} * {this.props.cartItem.quantity} <b>{this.props.item.price * this.props.cartItem.quantity }$</b>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { item: state.items.find( item =>  item.id === ownProps.itemId),
             cartItem: state.cart.find( item =>  item.id === ownProps.itemId) };
};


export default connect( mapStateToProps, {searchItem})(CartLine);