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
        return (<div style={{ position: "relative", top: 0, left: 0, width: "100%" }} ><h1>Road Map</h1><hr></hr>
            <div style={{ position: "relative", top: 0, left: 0, width: "100%" }}>
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} > <img src="../../../Roadmap.png" style={{ width: "100%" }} /></div>
               {/*
               <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} > <img src="../../../bg.png" style={{ width: "100%" }} /></div>
                
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} > <img src="../../../Road.png" style={{ width: "100%" }} /></div>
                
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%", opacity: this.state.op221 }} id="221_up" ><img src="../../../2q21_up.png" style={{width: "100%"}} /></div>
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} id="221_down" ><img src="../../../2q21_down.png" style={{ width: "100%" }} /></div>
                

                <div style={{ position: "absolute", top: 10, left: 0, width: "100%", opacity: this.state.op321 }} id="321_up" ><img src="../../../3q21_up.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} id="321_down" ><img src="../../../3q21_down.png" style={{ width: "100%" }} /></div>
                

                <div style={{ position: "absolute", top: 10, left: 0, width: "100%", opacity: this.state.op421 }} id="421_up" ><img src="../../../4q21_up.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 10, left: 0, width: "100%" }} id="421_down" ><img src="../../../4q21_down.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: "300px", left: "320px", background: "tomato", height: "100px", width: "100px", opacity: 0.5 }}
                    onMouseOver={this.onHover321} onMouseLeave={this.onLeave321}>&nbsp;</div>
                <div style={{ position: "absolute", top: "190px", left: "310px", background: "tomato", height: "100px", width: "100px", opacity: 0.5 }}
                    onMouseOver={this.onHover221} onMouseLeave={this.onLeave221}>&nbsp;</div>
                <div style={{ position: "absolute", top: "380px", left: "380px", background: "tomato", height: "100px", width: "100px", opacity: 0.5 }}
               onMouseOver={this.onHover421} onMouseLeave={this.onLeave421}>&nbsp;</div> */}
            </div>
        </div>);
    }
}

export default RoadMap;