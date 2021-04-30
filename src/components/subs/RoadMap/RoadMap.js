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
    render() {
        return (<div style={{ position: "relative", top: 0, left: 0 }} ><h1>Road Map</h1><hr></hr>
            <div style={{ position: "relative", top: 0, left: 0 }}>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../bg.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../launches.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../Road.png" style={{ width: "100%" }} /></div>
                
                <div style={{ position: "absolute", top: 20, left: 0, opacity: this.state.op221 }} id="221_up" ><img src="../../../2q21_up.png" style={{width: "100%"}} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} id="221_down" onMouseOver={this.onHover221} onMouseLeave={this.onLeave221}><img src="../../../2q21_down.png" style={{ width: "100%" }} /></div>
            </div>
        </div>);
    }
}

export default RoadMap;