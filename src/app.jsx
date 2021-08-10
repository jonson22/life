import React, { Component } from 'react';

export default class App extends Component {
    render() {
        let title = 'hello world';
        const change = ()=>{
            title = 'good bye';
            console.log(title);

        };
        return(

            <div>
                <h1>{title}</h1>
                <button onClik={change}>change</button>
            </div>

      );  
    }
}