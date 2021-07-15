import React, { Component } from "react";
import Slideshow from "./SlideShow";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { getUsers, setScreenMode } from "../../action/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const fresh = "#9fe6c3";
const sky = "#aad9d8";
const purple = "#9f95c3";
const grey = "#e2e3db";
const blue = "#7c9cb6";
const dgrey = "#888888";

class Landing extends Component {
  static propTypes = {
    getUsers: PropTypes.func,
    setScreenMode: PropTypes.func,
    screenMode: PropTypes.string,
    users: PropTypes.array,
    net: PropTypes.string,
    bal: PropTypes.string,
  };
  state = {
    modal: true,
    url: "V0XJyczU_7M",
    screenMode: "about",
  };
  toggle = (e) => {
    this.setState({ modal: !this.state.modal });
  };
  onClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({ screenMode: e.target.id });
    this.props.setScreenMode(e.target.id);
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
            <div
              className="btn mr-1"
              style={{
                color: grey,
                background: purple,
                fontWeight: 900,
                borderRadius: "9px",
                opacity: 0.5,
              }}
              // onClick={this.onClick}
              id="frx_lnk"
            >
              Fractionize
            </div>
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
            <img
              style={{ marginTop: "4em", margin: "2em", marginLeft: "1em" }}
              src="./PYE_Logo.png"
              alt=""
            />
            <div
              className="btn mr-1"
              style={{
                color: grey,
                background: purple,
                fontWeight: 900,
                borderRadius: "9px",
              }}
              onClick={this.onClick}
              id="pyeditor_lnk"
            >
              Create Assets
            </div>
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
            <div
              className="btn mr-1"
              style={{
                color: grey,
                background: purple,
                fontWeight: 900,
                borderRadius: "9px",
                opacity: 0.5,
              }}
              // onClick={this.onClick}
              id="swap_lnk"
            >
              Start Pooling
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  screenMode: state.userState.screenMode,
  users: state.userState.users,
  net: state.userState.net,
  bal: state.userState.bal,
});
export default connect(mapStateToProps, { getUsers, setScreenMode })(Landing);
