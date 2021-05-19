import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap'
import ProgramerDetail from './programerDetail';
class Prog1 extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const program = this.props.programers.map((prog) => {
            return (
                <div  key={prog.id} className="col-12 col-md-5 m-1">
                    <Card onClilck={() => { this.props.onClilck(prog.id) }}>
                        <CardImg src={prog.image}alt={prog.name}/>
                        <CardBody>
                            <CardTitle>{prog.name}</CardTitle>
                            <CardText >{prog.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {program}
                </div>


            </div>
        )
    }

}



    export default Prog1