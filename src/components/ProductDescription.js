import { connect } from 'react-redux';
import React from 'react';
import { searchItem, addToCart} from '../actions';
class ProductDescription extends React.Component {
    state = { quantity: 0};

    componentDidMount() {
        this.props.searchItem(1);
    }

    changeQuantity = (toadd) => {
       this.setState({ quantity: Math.max(0,this.state.quantity + toadd) });
    }

    addToCart = (productId,quantity) => {
        this.props.addToCart(productId,quantity)
        this.setState({ quantity: 0 });
    }

    render() {
        if (!this.props.item) {
            return <div>Loading</div>;
          }
        return (
        
        <div className="product-description">
            <h5>Sneaker Company</h5>
            <h1>{this.props.item.title}</h1>
            <p>{this.props.item.desc}</p>
            <p><span className="price">${this.props.item.price * this.state.quantity * this.props.discount}</span> <span className="discount">50% discount</span> </p>
            <p> <span className="reduction">${this.props.price} (unit price)</span></p>
            <p>
                <button className="btn-quantity" onClick={() => this.changeQuantity(-1 )}>-</button> 
                    <span className="quantity">{this.state.quantity} </span>
                <button className="btn-quantity" onClick={() => this.changeQuantity(1 )}>+</button>
                <button className="btn-add-cart" onClick={() => this.addToCart(this.props.item.id, this.state.quantity)}>Add to cart</button>
            </p> 
        </div>
    )
    }

}

const mapStateToProps = state => {
    return { item: state.items.find( item =>  item.id === 1), discount: state.discount };
  };

export default connect( mapStateToProps, { searchItem, addToCart})(ProductDescription);