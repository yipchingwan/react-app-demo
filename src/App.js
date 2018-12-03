import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import number from './component/number.js'

class App extends Component {
  state = {number:0}
  update = ()=>{
    this.setState({number:this.props.defaultFunction(this.state.number)});
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



