import React, { Component } from 'react';
import { PROGRAMERS } from '../shared/program';
import Prog1 from './Prog1';
import ProgramerDetail from './programerDetail';
import {Navbar,NavbarBrand} from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programers: PROGRAMERS,
            selectedProgramer: null
        }
    }
    onProgramerSelect(progId) {
        this.setState({ selectedProgramer: progId })
    }
    render() {
        return(
        <div>
            
            <Header />

            <Prog1 programers={this.state.programers}onClick={(progId)=>this.onProgramerSelect(progId)}/>
                
            <ProgramerDetail programer={this.state.programers.filter((prog) => prog.id === this.state.selectedProgramer)[0]} />
        
        
        <Footer />
        </div>)
                       
    }
}



export default Main