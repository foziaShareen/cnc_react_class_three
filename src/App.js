
import Main from './components/Main'
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    )
  }
}
export default App;
