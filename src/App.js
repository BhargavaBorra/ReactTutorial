import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState] = useState({
    persons: [
      {name : 'Bhargava', age : 24 },
      {name : 'Yaswanth', age : 19 },
      {name : 'Kartheek', age : 24 }
    ]
  });
  
  const [ otherState, setOtherstate] = useState('Some other state');

  console.log(personsState, otherState);
  // state = {
  //   persons: [
  //     {name : 'Bhargava', age : 24 },
  //     {name : 'Yaswanth', age : 19 },
  //     {name : 'Kartheek', age : 24 }
  //   ]
  // }

  const switchNameHandler = () => {
    // console.log("Click Successfull")
    // this.state.persons[0].name = "Borra";
    setPersonsState({
      persons: [
        {name : 'Bhargava Borra', age : 24 },
        {name : 'Yaswanth Kumar', age : 19 },
        {name : 'Kartheek Sunkara', age : 25 }
      ]
    });
  }

  // render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} >My Hobbies: PUBG</Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a react app!!!!!!'))
  // }
}

export default app;
