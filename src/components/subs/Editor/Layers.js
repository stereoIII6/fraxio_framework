import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import LayerInput from './LayerInput';
import MediaPreview from './MediaPreview';
import Layer from './Layer';
class Layers extends Component {
    static propTypes = {
        workingPYE: PropTypes.object,
        workingLayer: PropTypes.object,
        layers: PropTypes.array
    };
    render() { 
        return ( <div>
            <LayerInput />
            <div className="row">
                <div className="col-4 alert alert-info">
                    {this.props.layers.map(layer => 
                        layer.layerID !== 0 ? <Layer key={layer.layerID} layerid={layer.layerID}/> : <div key={0} layerid={0}>Layers</div>
                    )}
                    
                </div>
                <div className="col-8 alert alert-warning">Layer Preview
                <MediaPreview />
                </div>
            </div>
        </div> );
    }
}
const mapStateToProps = state => ({
    workingPYE: state.pyeState.workingPYE,
    workingLayer: state.layerState.workingLayer,
    layers: state.layerState.layers
});
 
export default connect(mapStateToProps, { }) (Layers);