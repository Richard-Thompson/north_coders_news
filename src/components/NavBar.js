import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({

    getInitialState () {
        return {
            navIsActive: false,
            menuClass: 'nav-right nav-menu'
        }
    },

    render () {
    return (
        <nav className="nav">
            <div className="nav-left">
                <a className="nav-item">
                <img className='logo'src='https://www.designmantic.com/create_thumb?id=15933&company=Northcoders%2BNews&slogan='/>
                </a>
            </div>
  
            <span className="nav-toggle" onClick={toggleMenu.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div id="menu" className={this.state.menuClass}>
                <a className="nav-item">
                <Link to='/'>
                All
                </Link>
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
            </div>
</nav>
    )
}

});

function toggleMenu() {
  if (this.state.navIsActive) {
    this.setState({
      navIsActive: !this.state.navIsActive,
      menuClass: 'nav-right nav-menu'
    });
  }
  else {
    this.setState({
      navIsActive: !this.state.navIsActive,
      menuClass: 'nav-right nav-menu is-active'
    });
  }
}

export default NavBar;
