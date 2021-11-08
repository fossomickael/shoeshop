import { connect } from 'react-redux';
import React from 'react';
import { selectShoe } from '../actions';
class Thumbnail extends React.Component {

    render() {
        return (
            <div className={`${this.props.shoe}-thumbnail product-thumb`} onClick={() => this.props.selectShoe(this.props.shoe)}></div>
        )
    }
}

const mapStateToProps = state => {
    return { selectedShoe: state.selectedShoe };
};

export default connect(mapStateToProps, { selectShoe })(Thumbnail);