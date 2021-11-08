import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
import ProductDescription from './ProductDescription';
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="card-product">
                    <ProductImage />
                    <ProductDescription />
                </div>
                <ThumbnailList />
            </div>
        )
    }

}


export default App;