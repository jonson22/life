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
           this.setState({ title: 'World', count: 1 });

        };
        
const plus =()=>{
    if(this.state.count < 10);
this.setState({count: this.state.count + 1});
if(this.state.count === 10) this.setState({count: 0});
}
const minus =()=>{
    if(this.state.count > 0);
   
this.setState({count: this.state.count - 1})
}

        return(

            <div>
                <h1>{this.state.title} {this.state.count}</h1>
               <button onClick={change}>change</button>
               <button onClick={plus}>+</button>
               <button onClick={minus}>-</button>
            </div>

      );  
    }
}