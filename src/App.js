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

  switchNameHandler = (newName) => {
    // console.log("Click Successfull")
    // this.state.persons[0].name = "Borra";
    this.setState({
      persons: [
        {name : newName, age : 24 },
        {name : 'Yaswanth Kumar', age : 19 },
        {name : 'Kartheek Sunkara', age : 25 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name : 'Bhargava', age : 24 },
        {name : event.target.value, age : 19 },
        {name : 'Kartheek Sunkara', age : 25 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!</p>
        <button
          style = {style} 
          onClick = {() => this.switchNameHandler('Bhargava Borra')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
        />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click = {this.switchNameHandler.bind(this, 'Borra')}
          changed = {this.nameChangedHandler}>
            My Hobbies: PUBG
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} 
        />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a react app!!!!!!'))
  }
}

export default App;
