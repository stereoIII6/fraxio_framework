import React, { Component } from 'react';
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
class Landing extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="slideshow" style={{ position: "relative", top: "0", background: "tomato", height: "220px", marginBottom:"2em", overflow: "hidden" }}>
                <div className="slider" style={{ position: "relative", top: "0" , left: "0", width: "400%", height: "220px", background: "lime"}}>
                    <div className="slide" id="slide1" style={{ textAlign: "center", paddingTop: "3em", float: "left", width:"25%", height: "220px", overflow: "hidden", background: "url('./one.png')" }}>
                        <h2 style={{ background: "none", color: "#9fe6c3", width: "auto"}} >GROWING INTO THE FUTURE ...</h2>
                    </div>
                    <div className="slide" id="slide2" style={{ float: "left", width: "25%", height: "220px", overflow: "hidden", background: "lightblue" }}>
                        <img src="./two.png" alt="" style={{ height: "220px" }} />
                    </div>
                    <div className="slide" id="slide3" style={{ float: "left", width: "25%", height: "220px", overflow: "hidden", background: "orange" }}>
                        <img src="./three.png" alt="" style={{ height: "220px" }} />
                    </div>
                    <div className="slide" id="slide3" style={{ float: "left", width: "25%", height: "220px", overflow: "hidden", background: "lightblue" }}>
                        <img src="./four.png" alt="" style={{ height: "220px" }} />
                    </div>
                </div>
            </div>
            <h1 style={{ fontSize: "5em", fontWeight: "900", marginBottom: "1em", background: "#9f95c3", color: "#e2e3db", textAlign: "center", borderRadius : "9px"}}>GIVE ME SOME MILQ</h1>
            <div className="row">
                <div className="col-4" style={{ opacity:"1"}}>
                    <h1>Welcome to the Fractio Framework </h1>
                    <h3>

                    </h3>
                </div>
                <div className="col-8">
                    <YoutubeEmbed embedId="1717zs_e9zw" />
                </div>
            </div>
        </div> );
    }
}
 
export default Landing;