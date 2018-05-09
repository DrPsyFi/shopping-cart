import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Shopping Cart</a>
      </nav>
      <div className="container">
        <h1>Cart Items</h1>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; 2018</a>
      </nav>
    </div>
    );
  }
}

export default App;
