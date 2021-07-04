/*
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//            _____               _   _                                             //
//           |  ___| __ __ _  ___| |_(_) ___                                        //
//           | |_ | '__/ _` |/ __| __| |/ _ \                                       //
//           |  _|| | | (_| | (__| |_| | (_) |                                      //
//           |_|  |_|  \__,_|\___|\__|_|\___/                                       //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              . you done something right . now you know where to look @.
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          @title :: Fractio Framework React App                                   // 
//          @id :: FR-90009                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90009 is Layer Input for the React Frontend.             //
//          It is the initial connection to IPFS for every File on Fractio          //
//                                                                                  //
//                                                                                  //
//          @author :: fractio.xyz                                                  //
//          @b2bContact :: irvin@fractio.xyz                                        //
//          @OpSecContact :: nmisner@fractio.xyz                                    //
//          @DigitalArchitecture :: aron@fractio.xyz                                //
//          @SocialMediaContact :: poblano.daniel@fractio.xyz                       //
//          @CommunityManagement :: louell_sala@fractio.xyz                         //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
*/
// Imports
import React, { Component } from "react";

class Team extends Component {
  state = {};
  stereoHover = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "aron@fractio.xyz";
    document.getElementById("name").innerHTML = "<p>Aron Ayuk<br/>'stere0'</p>";
    document.getElementById("title").innerHTML =
      "<p>Chief Digital Architect<br/><i>'Chief Executive Officer'</i></p>";
    document.getElementById("motto").innerHTML =
      "talk less say more… read less think more… demand less be more…";
    document.getElementById("about").innerHTML =
      "stere0 was born in Berlin, Germany - he started coding in 2000 and never stopped developing ever since...";
    /* */
  };
  danielHover = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "poblanodaniel@fractio.xyz";
    document.getElementById("name").innerHTML =
      "<p>Daniel Poblano<br/><i>'skillz'</i></p>";
    document.getElementById("title").innerHTML =
      "<p>Social Media Engineer<br/><i>'President'</i></p>";
    document.getElementById("motto").innerHTML =
      "<h3>To find yourself, think for yourself.</h3>";
    document.getElementById("about").innerHTML =
      "Happy to work with some of the most amazing people I know. ";
    /* */
  };
  irvinHover = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "irvin@fractio.xyz";
    document.getElementById("name").innerHTML =
      "<p>Irvin Chen<br/><i>'1rvin'</i></p>";
    document.getElementById("title").innerHTML =
      "<p>Business &amp; Marketing Strategist<br/><i>'Treasury Master'</i></p>";
    document.getElementById("motto").innerHTML = "<h2>Stay curious ...</h2>";
    document.getElementById("about").innerHTML =
      "Irvin is a systems coordinator and entrepreneur.";
    /* */
  };
  louellHover = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "louell_sala@fractio.xyz";
    document.getElementById("name").innerHTML =
      "<p>Louell Sala<br/><i>'Alchemist21'</i></p>";
    document.getElementById("title").innerHTML =
      "<p>Technical Community Manager<br/><i>'Vice President'</i></p>";
    document.getElementById("motto").innerHTML =
      "Never let anyone tell you that you don't deserve what you want.";
    document.getElementById("about").innerHTML =
      "Louell is a physician and web developer who enjoys long walks on the beach and fried chicken.";
    /* */
  };
  nodeHover = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "n.misner@fractio.xyz";
    document.getElementById("name").innerHTML =
      "<p>Nathan Misner<br/><i>'xnode'</i></p>";
    document.getElementById("title").innerHTML =
      "<p>Chief Information Security Officer<br/><i>'Technical Infrastructure'</i></p>";
    document.getElementById("motto").innerHTML = "<h2>Be Yourself.</h2>";
    document.getElementById("about").innerHTML =
      "<p>Whats up... Enjoying Fractio Framework?</p>";
    /* */
  };
  leave = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById("email").innerHTML = "irvin@fractio.xyz";
    document.getElementById("name").innerHTML = "<p>Fractio<br/>Framework</p>";
    document.getElementById("title").innerHTML =
      "<p>Gimme Some MLQ<br/><i>Web3 is going cows ...</i></p>";
    document.getElementById("motto").innerHTML = "<h1>FRX</h1>";
    document.getElementById("about").innerHTML =
      "Our Service allows users to ...";
    /* */
  };
  render() {
    return (
      <div
        style={{
          textAlign: "left",
          background: "url('../../../team.png')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="row"
          style={{
            height: "120px",
            width: "100%",
            padding: "10px",
            color: "ivory",
          }}
        >
          <div
            className="col-4"
            id="title"
            style={{
              marginLeft: "10px",
              marginTop: "10px",
              fontWeight: "900",
              color: "#9fe6c3",
            }}
          >
            Your Allround Token Service
          </div>
          <div
            className="col-4"
            id="stereo1"
            onMouseOver={this.stereoHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div
            className="col-4"
            id="name"
            style={{
              textAlign: "right",
              marginRight: "-50px",
              fontSize: "1.6em",
              color: "lightgrey",
              marginTop: "10px",
            }}
          >
            Fractio<br></br>Framework
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "260px",
            width: "100%",
            padding: "10px",
            color: "ivory",
          }}
        >
          <div
            className="col-4"
            id="xnode1"
            onMouseOver={this.nodeHover}
            onMouseLeave={this.leave}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          ></div>
          <div
            className="col-4"
            id="stereo2"
            onMouseOver={this.stereoHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div
            className="col-4"
            id="irvin1"
            onMouseOver={this.irvinHover}
            onMouseLeave={this.leave}
            style={{
              textAlign: "right",
              marginRight: "-50px",
              marginTop: "10px",
            }}
          ></div>
        </div>
        <div
          className="row"
          style={{
            height: "250px",
            width: "100%",
            padding: "10px",
            color: "ivory",
          }}
        >
          <div
            className="col-5"
            id="xnode2"
            onMouseOver={this.nodeHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div className="col-2" id="motto">
            <h1>FRX</h1>
          </div>
          <div
            className="col-5"
            id="irvin2"
            onMouseOver={this.irvinHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "240px",
            width: "100%",
            padding: "10px",
            color: "ivory",
          }}
        >
          <div
            className="col-5"
            id="louell"
            onMouseOver={this.louellHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div
            className="col-3"
            id="daniel"
            onMouseOver={this.danielHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div
            className="col-3"
            id="about"
            style={{ marginLeft: "40px", fontSize: "1.6em", color: "#9f95c3" }}
          >
            Our Service allows users to ...
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "100px",
            width: "100%",
            padding: "10px",
            color: "ivory",
          }}
        >
          <div
            className="col"
            id="email"
            style={{ marginLeft: "10px", color: "#9f95c3" }}
          >
            irvin@fractio.xyz
          </div>
          <div
            className="col"
            id="daniel"
            onMouseOver={this.danielHover}
            onMouseLeave={this.leave}
          >
            &nbsp;
          </div>
          <div className="col">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default Team;
