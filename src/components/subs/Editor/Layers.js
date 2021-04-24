import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import LayerInput from './LayerInput';
import MediaPreview from './MediaPreview';
class Layers extends Component {
    state = {  }
    render() { 
        return ( <div>
            <LayerInput />
            <div className="row">
                <div className="col-4 alert alert-info">Layers</div>
                <div className="col-8 alert alert-warning">Layer Preview
                <MediaPreview />
                </div>
            </div>
        </div> );
    }
}
 
export default Layers;