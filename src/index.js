import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Student from './Student'
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Student />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const title = <h1>World</h1>;

ReactDOM.render(<h1>Hello {title}</h1>,
  document.getElementById('root')
  );
