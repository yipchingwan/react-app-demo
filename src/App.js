import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  update = ()=>{
    this.setState({number:1});
  }  
  render() {
    
    return (

          <div>
            <button onClick={this.update}>Hello World!</button>
            name:{this.state.number}
          </div>
  
            

    );
  }
}

export default App;



