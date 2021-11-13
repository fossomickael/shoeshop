import { connect } from 'react-redux';
import React from 'react';
class ProductImage extends React.Component {

    render() {
        return (
            <div className={`${this.props.selectedShoe} product-large`} onClick={this.props.onClick}></div>
        )
    
    }
   

}

const mapStateToProps = state => {
    return { selectedShoe: state.selectedShoe };
};

export default connect(mapStateToProps)(ProductImage);