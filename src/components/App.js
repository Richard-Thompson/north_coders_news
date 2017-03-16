import React from 'react';
import NavBar from './NavBar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
