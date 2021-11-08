import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import ProductDescription from './ProductDescription';
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="card-product">
                    <div class="product-images">
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