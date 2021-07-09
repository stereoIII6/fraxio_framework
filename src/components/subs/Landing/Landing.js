import React, { Component } from "react";
import Slideshow from "./SlideShow";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
class Landing extends Component {
  state = {
    modal: true,
    url: "hsDv2pzY7xQ",
  };
  toggle = (e) => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <div style={{ position: "relative" }}>
          <Slideshow />
        </div>

        <h1
          style={{
            fontSize: "5em",
            fontWeight: "900",
            marginTop: "250px",
            marginBottom: "1em",
            background: "#9f95c3",
            color: "#e2e3db",
            textAlign: "center",
            borderRadius: "9px",
          }}
        >
          Digital Assets Toolbox v1
        </h1>
        <div
          onClick={this.toggle}
          url={this.state.url}
          style={{
            position: "absolute",
            left: "0%",
            top: "0%",
            height: "1400px",
            width: "100%",
            paddingTop: "5em",
            background: "rgba(0,0,0,0.75)",
            display: this.state.modal ? "d-inline-block" : "none",
            zIndex: 100,
          }}
        >
          <ModalBody
            style={{
              width: "900px",
              margin: "0px auto",
            }}
            onClick={this.toggle}
          >
            <div className="jumbotron">
              <h3 style={{ marginBottom: "2em" }}>
                Welcome to the Fractio Framework
              </h3>
              <YoutubeEmbed embedId={this.state.url} />
              <p style={{ marginTop: "2em" }}>
                Fractio allows users to easily create multilayer, interactive
                multimedia assets that react to off-chain data using oracles. We
                provide access to all the tools you need to produce and
                fractionize any type digital goods. All without ever having the
                need to code.
              </p>
              {/*
              <Button color="primary" onClick={this.goLike} disabled>
                Twitch
              </Button>{" "}
              <Button color="primary" onClick={this.goLike} disabled>
                Disord
              </Button>{" "}
              <Button color="primary" onClick={this.goLike} disabled>
                Twitter
              </Button>
              /* */}
            </div>
          </ModalBody>
        </div>
        <div className="row">
          <div
            style={{
              textAlign: "center",
              padding: "2em",
              marginTop: "2em",
              background: "white",
            }}
            className="col-3 alert"
          >
            <h1>Fractionize Your Assets</h1>
            <img
              style={{ marginTop: "4em", marginBottom: "2em" }}
              src="./FRX_Logo.png"
              alt=""
            />
            <Button>Break Assets</Button>
          </div>
          <div className="col-1"></div>
          <div
            style={{
              textAlign: "center",
              padding: "2em",
              paddingLeft: "1em",
              marginTop: "2em",
              background: "white",
            }}
            className="col-4 alert"
          >
            <h1>Create Digital Assets without code</h1>
            <img
              style={{ marginTop: "4em", margin: "2em", marginLeft: "1em" }}
              src="./PYE_Logo.png"
              alt=""
            />
            <Button>Create Assets</Button>
          </div>

          <div className="col-1"></div>
          <div
            style={{
              textAlign: "center",
              padding: "2em",
              marginTop: "2em",
              background: "white",
            }}
            className="col-3 alert"
          >
            <h1>Create Token Pairs</h1>
            <img
              style={{ marginTop: "2em", marginBottom: "2em" }}
              src="./MLQ_Logo.png"
              alt=""
            />
            <Button>Provide MLQuidity</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
