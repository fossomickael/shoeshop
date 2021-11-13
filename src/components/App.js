import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import Navbar from './Navbar';
import Gallery from './Gallery';
import ProductDescription from './ProductDescription';
class App extends React.Component {


    state = { showGallery: false, };
    render() {
        return (
            <div>  
                <div className="useful-width">
                    <Navbar />
                    <div className="card-product">
                        <div className="product-images">
                            <ProductImage onClick={() => this.setState({showGallery: !this.state.showGallery})}/>
                            <ThumbnailList />
                        </div>
                        <ProductDescription />
                    </div>      
                </div>
                <Gallery isVisible={this.state.showGallery} onClick={() => this.setState({showGallery: !this.state.showGallery})}/>
            </div>
        )
    }

}


export default App;