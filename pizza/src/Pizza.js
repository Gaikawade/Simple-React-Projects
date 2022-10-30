import React from 'react';
import pizza from './pizza.png';

const counter = {
  backgroundColor:'#000',
  borderRadius: '20px'
}

const button = {
  fontSize: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '10px'
}

class Pizza extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  takeOrder(){
    this.setState({
      count : this.state.count + 1
    })
  }

  cancelOrder(){
    if(this.state.count === 0) return;
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return <div>
      <img src = {pizza} alt= 'pizza' width = {250}/>
      <h1>Pizza order counter</h1>
      <h1 style = {counter}> {this.state.count} </h1>
      <button style={button} onClick = {() => this.takeOrder()}>Take Order</button> <br/><br/>
      <button style={button} onClick = {() => this.cancelOrder()}>Cancel Order</button>
    </div>
  }
}

export default Pizza;