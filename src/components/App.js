import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import ProductDescription from './ProductDescription';
class App extends React.Component {
    render() {
        return (
            <div className="useful-width">
                <div className="card-product">
                    <div className="product-images">
                        <ProductImage />
                        <ThumbnailList />
                    </div>
                    <ProductDescription />
                </div>
                
            </div>
        )
    }

}


export default App;