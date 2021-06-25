import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import {getPyeAssets, getPyeData, createPye, discardPye} from "../../action/pyeActions";
import { Button, InputGroup, Input, Form } from 'reactstrap';
import Layers from './Layers';
class MaskTwo extends Component {
    static propTypes = {
        workingPYE: PropTypes.object
    };
    state = {}
    onDiscard = (e) => {
        e.preventDefault();
        this.props.discardPye();
    }
    onSave = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    render() {
        return (
            this.props.workingPYE.booly ? 
            <div>
                <h1 className="m-0 p-0">{this.props.workingPYE.name} Layer Editor 
                <Button style={{color:"tomato",float:"right"}}
                onClick={this.onDiscard}>DISCARD</Button>
                <Button style={{color:"lime",float:"right", marginRight: "1em"}}
                onClick={this.onSave}>SAVE (1 MLQ)</Button>
                </h1>
                <hr>
                </hr>
                <Layers />                
            </div>
            : null
        );
    }
}

const mapStateToProps = state => ({
    workingPYE: state.pyeState.workingPYE
});
 
export default connect(mapStateToProps, { getPyeAssets,getPyeData,createPye, discardPye })(MaskTwo);