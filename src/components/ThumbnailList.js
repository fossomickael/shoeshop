import React from 'react';
import Thumbnail from './Thumbnail';
import { connect } from 'react-redux';

class ThumbnailList extends React.Component {

    renderList = () => {
        return this.props.shoes.map(shoe => {
            return <Thumbnail shoe={shoe} key={shoe} />
        })
    }

    render() {
        return (
            <div className="thumblist">
                {this.renderList()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { shoes: state.shoes };
  };

export default connect(mapStateToProps)(ThumbnailList);