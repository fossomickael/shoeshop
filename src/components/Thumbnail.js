import { connect } from 'react-redux';
import React from 'react';
class Thumbnail extends React.Component {

    render() {
        return (
            <div className={`${this.props.shoe}-thumbnail product-thumb`}></div>
        )
    
    }
   

}

const mapStateToProps = state => {
    return { selectedShoe: state.selectedShoe };
};

export default connect(mapStateToProps)(Thumbnail);