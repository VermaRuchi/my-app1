import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';

class App extends Component {
  constructor (props) {
    super(props);
    console.log("[App.js] Inside Constructore", props);
    this.state =  {
      persons : [
        { id: "aaa", name : "ruchi", age :"25"},
        { id: "bbb", name: "riya", age :"24"},
        { id: "ccc", name: "tiya", age :"23"}
      ],
      otherstate : 'some other value',
      showPersons : false
    }
  }
  componentWillMount(){
    console.log("[App.js] Inside componentWillMount");
  }
  componentDidMount(){
    console.log("[App.js] Inside componentDidMount");
  }
  // state = {
  //   persons : [
  //     { id: "aaa", name : "ruchi", age :"25"},
  //     { id: "bbb", name: "riya", age :"24"},
  //     { id: "ccc", name: "tiya", age :"23"}
  //   ],
  //   otherstate : 'some other value',
  //   showPersons : false
  // }

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
    // const style = {
    //   backgroundColor : "green",
    //   color : "white",
    //   font : "inherit",
    //   padding : "8px",
    //   border : "2px solid blue",
    //   pointer : "cursor",
    // };
   
    console.log("[App.js] inside render()");
    let persons = null;
    // let btnClass = ' ';
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
          {/* { this.state.persons.map ( (person, index) => {
            return <Person 
                    click={ () => this.deletePersonHandler( index )} 
                    name={person.name}
                    age={person.age} 
                    key={person.id}
                    changed={ (event)=> this.nameChangedHandler(event, person.id)}/>

          })} */}
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
      // style.backgroundColor = "red"; 
      // btnClass = classes.Red;
    }
    
    return (
          <div className={classes.App}>
            <Cockpit
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              clicked = {this.togglePersonsHandler}
            />
            {/* <h1>Hi, I am React developer.</h1>
            <p className={assignedClasses .join(' ')}>This is really working</p>
            <button className = {btnClass}// style={style} 
            onClick={this.togglePersonsHandler}>Toggle Person</button> */}
            {persons}
          </div>
    );
  }
}

export default App;

