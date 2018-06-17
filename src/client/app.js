import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './app.css';
class App extends React.Component {
 
  render() {
      return (
         <h1>CINEBRAIN 1.0</h1>
      );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);