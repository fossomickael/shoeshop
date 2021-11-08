import React from 'react';
import ProductImage from './ProductImage';
import ThumbnailList from './ThumbnailList';
class App extends React.Component {
    render() {
        return (
            <div>
                <ProductImage />
                <ThumbnailList />
            </div>
        )
    }

}


export default App;