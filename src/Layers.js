import React, { Component } from "react";
import { Button, InputGroup, Input, Form, CustomInput } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, addSlice, activateLayer } from "./action/userActions.js";
class Layers extends Component {
  static propTypes = {
    feeds: PropTypes.array,
    getUser: PropTypes.func,
    addSlice: PropTypes.func,
    activateLayer: PropTypes.func,
    newImla: PropTypes.object,
  };
  state = {};
  activateL = (e) => {
    e.preventDefault();
    console.log("act init // ", Number(e.target.name));
    this.props.activateLayer(Number(e.target.name));
  };
  deActivateL = (e) => {
    e.preventDefault();
    console.log("act init // ", null);
    this.props.activateLayer(null);
  };
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "50px",
          zIndex: 2001,
        }}
      >
        {this.props.newImla.iData.layers.map((layer) => (
          <div
            key={layer.lId}
            id={layer.lId}
            style={{
              background:
                this.props.newImla.activeL === layer.lId
                  ? "rgba(55,25,244,0.3)"
                  : "rgba(255,25,24,0.3)",
              padding: "20px",
            }}
          >
            <Button id="close" onClick={this.dropSlice}>
              x
            </Button>
            {this.props.newImla.activeL !== layer.lId ? (
              <Button id="act" onClick={this.activateL} name={layer.lId}>
                v
              </Button>
            ) : (
              <Button id="act" onClick={this.deActivateL} name={layer.lId}>
                v
              </Button>
            )}
            {layer.lId}
            <div id={layer.lId} style={{ color: layer.lConf.master }}>
              {layer.lConf.name} - {layer.lConf.group}
            </div>
            <div id={layer.lId}>{layer.lConf.type} </div>
            <Button id="help" onClick={this.dropSlice}>
              ?
            </Button>
            <br />
            <div id={layer.lId}>{layer.lFeed.feed}</div>
            <div id={layer.lId}>
              {layer.lFeed.oracle} [ low: {layer.lFeed.lo.toFixed(2)} / high:
              {layer.lFeed.hi.toFixed(2)} ]
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  feeds: state.userState.feeds,
  newImla: state.userState.newImla,
});

export default connect(mapStateToProps, { getUser, addSlice, activateLayer })(
  Layers
);
