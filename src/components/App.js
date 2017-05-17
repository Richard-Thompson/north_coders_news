import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default App;
