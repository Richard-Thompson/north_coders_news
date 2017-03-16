import React from 'react';
import './NavBar.css';

function NavBar (props){
    return (
        <nav className="nav">
            <div className="nav-left">
                <a className="nav-item">
                <img className='logo'src='https://www.designmantic.com/create_thumb?id=15941&company=NorthCoders%2BNews&slogan='/>
                </a>
            </div>

            <div className="nav-center">
                
                
            </div>

  
            <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div className="nav-right nav-menu">
                <a className="nav-item">
                All
                </a>
                <a className="nav-item">
                Cooking
                </a>
                <a className="nav-item">
                Coding
                </a>
                <a className="nav-item">
                Football
                </a>

                <span className="nav-item">
                
                
                </span>
            </div>
</nav>
    )
}

export default NavBar;