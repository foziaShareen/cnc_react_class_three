
import Main from './components/Main'
import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Main/>
      </div>
    )
  }
}
export default App;
