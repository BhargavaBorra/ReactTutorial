import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : 'Bhargava', age : 24 },
      {name : 'Yaswanth', age : 19 },
      {name : 'Kartheek', age : 24 }
    ],
    otherState : 'Some other state'
  }

  switchNameHandler = () => {
    // console.log("Click Successfull")
    // this.state.persons[0].name = "Borra";
    this.setState({
      persons: [
        {name : 'Bhargava Borra', age : 24 },
        {name : 'Yaswanth Kumar', age : 19 },
        {name : 'Kartheek Sunkara', age : 25 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} >My Hobbies: PUBG</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a react app!!!!!!'))
  }
}

export default App;
