import React, {Component} from 'react';
import Person from './Person/Person.js';
class Persons extends Component {
    constructor (props) {
        super(props);
        console.log("[Persons.js] Inside Constructore", props);
        
      }
    componentWillMount(){
        console.log("[Persons.js] Inside componentWillMount");
    }
    componentDidMount(){
        console.log("[Persons.js] Inside componentDidMount");
    }
    render ( ) {
        console.log("[Persons.js] Inside render()");
        return this.props.persons.map ( (person, index) => {
            return <Person 
                    click={ () => this.props.clicked( index )} 
                    name={person.name}
                    age={person.age} 
                    key={person.id}
                    changed={ (event)=> this.props.changed(event, person.id)}
                    />
                });
    }
}
export default Persons;