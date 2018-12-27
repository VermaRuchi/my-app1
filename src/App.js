import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons : [
      { id: "aaa", name : "ruchi", age :"25"},
      { id: "bbb", name: "riya", age :"24"},
      { id: "ccc", name: "tiya", age :"23"}
    ],
    otherstate : 'some other value',
    showPersons : false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons : [
  //       { name: newName, age:"25"},
  //       { name: "riya sharma", age:"26"},
  //       { name: "tiya", age :"23"}
  //     ]
  //   })
  // }

  deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons; // fetching person array in const person // getting the all person into state
        // const persons = this.state.persons.slice(); // copy the array
        const persons = [...this.state.persons]; 
        persons.splice( personIndex, 1) // removing one element of the array // removing the one element you want to remove by using the index of the person
        this.setState( {persons : persons} ); // set the persons in new persons // updating the state

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id===id;
    });
    const person = { 
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow});

  }
  
  render() {
    const style = {
      backgroundColor : "green",
      color : "white",
      font : "inherit",
      padding : "8px",
      border : "2px solid blue",
      pointer : "cursor",
    };
   

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map ( (person, index) => {
            return <Person 
                    click={ () => this.deletePersonHandler( index )} 
                    name={person.name}
                    age={person.age} 
                    key={person.id}
                    changed={ (event)=> this.nameChangedHandler(event, person.id)}/>

          })}
          {/* <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} 
            click={ () => this.switchNameHandler("RUCHI SWATI VERMA!!")}
            changed={this.nameChangedHandler}>
            My hobby is singing
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} >
            My hobby is dancing
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
            My hobby is sketching
          </Person> */}
        </div> 
      );
      style.backgroundColor = "red"; 
    }
    const classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push("bold");
    }
    return (
          <div className="App">
            <h1>Hi, I am React developer.</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
            {persons}
          </div>
    );
  }
}

export default App;
