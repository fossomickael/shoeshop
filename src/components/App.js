import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import Navbar from './Navbar';
import Gallery from './Gallery';

import ProductDescription from './ProductDescription';
class App extends React.Component {
    render() {
        return (
            <div>
                
                <div className="useful-width">
                    <Navbar />
                    <div className="card-product">
                        <div className="product-images">
                            <ProductImage />
                            <ThumbnailList />
                        </div>
                        <ProductDescription />
                    </div>
                   
                </div>
                 <Gallery />
            </div>
        )
    }

}


export default App;