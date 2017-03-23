import React from 'react';
import {Link} from 'react-router';

function NavBar (props){
    return (
        <nav className="nav">
            <div className="nav-left">
                <a className="nav-item">
                <img className='logo'src='https://www.designmantic.com/create_thumb?id=15933&company=Northcoders%2BNews&slogan='/>
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
                <Link to='/cooking/articles'>
                Cooking
                </Link>
                </a>
                <a className="nav-item">
                <Link to='/coding/articles'>
                Coding
                </Link>
                </a>
                <a className="nav-item">
                <Link to='/football/articles'>
                FootBall
                </Link>
                </a>

                <span className="nav-item">
                
                
                </span>
            </div>
</nav>
    )
}

export default NavBar;