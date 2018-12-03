import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import number from './component/number.js'
import Line from './component/Line.js'

class App extends Component {
  state = {number:0, numberArray : new Array(1).fill(0)}

  update = ()=>{
    this.setState({number:this.props.defaultFunction(this.state.number), 
      numberArray : new Array(this.props.defaultFunction(this.state.number)).fill(0)});
    
  }
  render() {
    
    return (

          <div>
            <button onClick={this.update}>Hello World!</button>
            name:{this.state.number}
            {this.state.numberArray.map(()=>(<Line/>))}
          </div>

        
            

    );
  }
}

export default App;



