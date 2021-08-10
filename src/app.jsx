import React, { Component } from 'react';

export default class App extends Component {
    constructor(props){
    super(props);
    this.state = {
        title: 'Hello World',
        count: 0,
    };
    }
    render() {
    
        const change = () => { 
           this.setState({ title: 'World' });

        };
        console.log(this);
        return(

            <div>
                <h1>{this.state.title}</h1>
               <button onClik={change}>change</button>
            </div>

      );  
    }
}