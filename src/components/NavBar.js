import React from 'react';
import {Link} from 'react-router';
import '../css/NavBar.css';

const NavBar = React.createClass({

    getInitialState () {
        return {
            navIsActive: false,
            menuClass: 'nav-right nav-menu'
        };
    },

    render () {
    return (
        <nav className="nav">
            <div className="nav-left title">
               <a className="nav-Item">
               <h1>NorthNews</h1>
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
    );
}

});

function toggleMenu () {
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
