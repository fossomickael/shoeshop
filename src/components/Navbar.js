import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="brand">sneakers</li> 
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li> 
                    <li><a href="/">About</a></li>
                    <li className="cart"><i className="fas fa-shopping-cart"></i></li>
                </ul>
            </div>
        )
    }


}

export default Navbar;