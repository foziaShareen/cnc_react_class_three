import React, { Component } from 'react';
import { PROGRAMERS } from '../shared/program';
import Prog1 from './Prog1';
import ProgramerDetail from './programerDetail';
import {Navbar,NavbarBrand} from 'reactstrap';

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
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand>
                        Hire top level programers
                        </NavbarBrand>
                </div>
            </Navbar>

            <Prog1 programers={this.state.programers}
                onClick={(ProgId) => {this.onProgramerSelect(ProgId) }} />
            <ProgramerDetail programer={this.state.programers.filter((prog) => prog.id === this.state.selectedProgramer)[0]} />
        </div>)
                       
    }
}



export default Main