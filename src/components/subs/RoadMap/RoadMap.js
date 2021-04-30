import React, { Component } from 'react';
const grey = "#e2e3dbff";
class RoadMap extends Component {
    state = {}
    render() {
        return (<div style={{ position: "relative", top: 0, left: 0 }} ><h1>Road Map</h1><hr></hr>
            <div style={{ position: "relative", top: 0, left: 0 }}>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../bg.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} > <img src="../../../Road.png" style={{ width: "100%" }} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} ><img src="../../../2q21_down.png" style={{width: "100%"}} /></div>
                <div style={{ position: "absolute", top: 20, left: 0 }} ><img src="../../../2q21_up.png" style={{width: "100%"}} /></div>

            </div>
        </div>);
    }
}

export default RoadMap;