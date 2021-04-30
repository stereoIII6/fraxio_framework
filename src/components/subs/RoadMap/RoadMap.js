import { nonExecutableDefinitionMessage } from 'graphql/validation/rules/ExecutableDefinitions';
import React, { Component } from 'react';
const grey = "#e2e3dbff";
class RoadMap extends Component {
    state = {op221: 0,
    op321: 0,
 op421: 0}
    onHover221 = (e) => {
        console.log("over");
        this.setState({op221: 1});
    }
    onLeave221 = (e) => {
        console.log("off");
        this.setState({ op221: 0 });
    }
    onHover321 = (e) => {
        console.log("over");
        this.setState({ op321: 1 });
    }
    onLeave321 = (e) => {
        console.log("off");
        this.setState({ op321: 0 });
    }
    onHover421 = (e) => {
        console.log("over");
        this.setState({ op421: 1 });
    }
    onLeave421 = (e) => {
        console.log("off");
        this.setState({ op421: 0 });
    }
    render() {
        return (<div style={{ position: "relative", top: 0, left: 0 }} ><h1>Road Map</h1><hr></hr>
            <div style={{ position: "relative", top: 0, left: 0 }}>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../bg.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../launches.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../Road.png" style={{ width: "100%" }} /></div>
                
                <div style={{ position: "absolute", top: 10, left: 0, opacity: this.state.op221 }} id="221_up" ><img src="../../../2q21_up.png" style={{width: "100%"}} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} id="221_down" onMouseOver={this.onHover221} onMouseLeave={this.onLeave221}><img src="../../../2q21_down.png" style={{ width: "100%" }} /></div>

                <div style={{ position: "absolute", top: 210, left: 0, opacity: this.state.op321 }} id="321_up" ><img src="../../../3q21_up.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 220, left: 0 }} id="321_down" onMouseOver={this.onHover321} onMouseLeave={this.onLeave321}><img src="../../../3q21_down.png" style={{ width: "100%" }} /></div>

                <div style={{ position: "absolute", top: 460, left: 0, opacity: this.state.op421 }} id="421_up" ><img src="../../../4q21_up.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 450, left: 0 }} id="421_down" onMouseOver={this.onHover421} onMouseLeave={this.onLeave421}><img src="../../../4q21_down.png" style={{ width: "100%" }} /></div>
            </div>
        </div>);
    }
}

export default RoadMap;