import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id : '1', name : 'Bhargava', age : 24 },
      {id : '2', name : 'Yaswanth', age : 19 },
      {id : '3', name : 'Kartheek', age : 24 }
    ],
    otherState : 'Some other state',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Click Successfull")
  //   // this.state.persons[0].name = "Borra";
  //   this.setState({
  //     persons: [
  //       {name : newName, age : 24 },
  //       {name : 'Yaswanth Kumar', age : 19 },
  //       {name : 'Kartheek Sunkara', age : 25 }
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

    // this.setState({
    //   persons: [
    //     {name : 'Bhargava', age : 24 },
    //     {name : event.target.value, age : 19 },
    //     {name : 'Kartheek Sunkara', age : 25 }
    //   ]
    // });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  } 

  togglepersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          {/* <Person 
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
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!</p>
        <button
          style = {style} 
          onClick = {this.togglepersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a react app!!!!!!'))
  }
}

export default App;
