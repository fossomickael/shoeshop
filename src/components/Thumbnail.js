import { connect } from 'react-redux';
import React from 'react';
import { selectShoe } from '../actions';
class Thumbnail extends React.Component {

    selectedClass = () => {
        if (this.props.shoe === this.props.selectedShoe)
        {
            return `${this.props.shoe}-thumbnail product-thumb selected`
        }
        return `${this.props.shoe}-thumbnail product-thumb`
    }

    render() {
        return (
            <div className={this.selectedClass()} onClick={() => this.props.selectShoe(this.props.shoe)}></div>
        )
    }
}

const mapStateToProps = state => {
    return { selectedShoe: state.selectedShoe };
};

export default connect(mapStateToProps, { selectShoe })(Thumbnail);