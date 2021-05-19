import React, { Component } from 'react'
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class ProgramerDetail extends Component {
    renderProgramer(prog) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={this.props.prog.image} alt={this.props.prog.name} />
                    <CardBody>
                        <CardTitle>
                            {this.props.prog.name}
                        </CardTitle>
                        <CardText>
                            {this.props.prog.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>);
    }
    render() {
        if (this.props.prog != null) {
            return (
                <div className="row">
                    {this.renderProgramer(this.props.prog)}

                    {this.renderComment(this.props.prog.comments)}
                </div>

            );
        }
        else {
            return (<div></div>);
        }
    }
}



    export default ProgramerDetail;