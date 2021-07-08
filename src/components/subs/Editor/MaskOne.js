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
//          @id :: FR-90801                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90801 is Layer Input for the React Frontend.             //
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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPyeAssets,
  getPyeData,
  createPye,
  updateWPname,
  updateWPsym,
  updateWPdesc,
} from "../../action/pyeActions";
import { Button, InputGroup, Input, Form, CustomInput } from "reactstrap";
// Class Definition
class MaskOne extends Component {
  // redux imports
  static propTypes = {
    pyes: PropTypes.array,
    workingPYE: PropTypes.object,
    updateWPname: PropTypes.func,
    updateWPsym: PropTypes.func,
    updateWPdesc: PropTypes.func,
  };
  // set mask one initial state
  state = {
    formatX: 8,
    formatY: 8,
    formatShow: "8x8.png",
    name: "",
    desc: "",
    symbol: "",
    VRF: false,
    JSRN: Math.random() * 10 ** 18,
    bg: "#9f95c3",
    col: "lightgrey",
    booly: true,
    layers: [],
    // "#9fe6c3"
    // "#9f95c3"
  };
  // change PYE name input handler
  onChangeName = (e) => {
    console.log(e.target.value);
    this.setState({ name: document.getElementById(e.target.id).value });
    // this.props.updateWPname(document.getElementById(e.target.id).value);
    // console.log(this.state);
  };
  // change PYE desc input handler
  onChangeDesc = (e) => {
    console.log(e.target.value);
    this.setState({ desc: document.getElementById(e.target.id).value });
    // this.props.updateWPdesc(document.getElementById(e.target.id).value);
    console.log(this.state);
  };
  // change PYE symbol input handler
  onChangeSym = (e) => {
    console.log(e.target.value);
    this.setState({ symbol: document.getElementById(e.target.id).value });
    // this.props.updateWPsym(document.getElementById(e.target.id).value);
    console.log(this.state);
  };
  // change PYE format input handler
  onSelect = (e) => {
    e.preventDefault();
    const vals = JSON.parse(e.target.value);
    // this.props.createPye({ formatX: vals.x, formatY: vals.y });
    this.setState({ formatX: vals.x, formatY: vals.y });
    document.getElementById("formatX").disabled = true;
    document.getElementById("formatY").disabled = true;
    // console.log(vals.x,vals.y);
  };
  // change PYE randomness input handler
  onChangeVRF = (e) => {
    e.preventDefault();
    this.setState({ JSRN: document.getElementsByName(e.target.name).value });
  };
  // change PYE Format width input handler
  onChangeFY = (e) => {
    e.preventDefault();
    const show = `${this.state.formatX}x${e.target.value}.png`;
    this.setState({
      formatY: e.target.value,
      formatShow: show,
    });
  };
  // change PYE format height input handler
  onChangeFX = (e) => {
    e.preventDefault();
    const show = `${e.target.value}x${this.state.formatY}.png`;
    this.setState({
      formatX: e.target.value,
      formatShow: show,
    });
  };
  // VRF HELP ALERT
  onHelp = (e) => {
    e.preventDefault();

    // Help Modal
    alert(
      "A unique VRF ID (verifiaby random number) will be generated by our Chainlink Oracle..."
    );
  };
  // VRF Module ON OFF mechanism
  onVRF = (e) => {
    e.preventDefault();
    if (this.state.VRF === false) {
      this.setState({
        bg: "#9fe6c3",
        col: "#9f95c3",
        VRF: !this.state.VRF,
      });
      document.getElementById("vrftxt").disabled = true;
      document.getElementById("vrftxt").value = null;
      document.getElementById("vrftxt").placeholder =
        "Your Unique ID will be generated at mint !";
    } else {
      this.setState({
        bg: "#9f95c3",
        col: "lightgrey",
        VRF: !this.state.VRF,
      });
      document.getElementById("vrftxt").disabled = false;
      const jsrn = Math.random() * 10 ** 18;
      document.getElementById("vrftxt").value = jsrn;
      this.setState({ JSRN: jsrn });
    }
  };
  // save working PYE to redux store
  onClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createPye(this.state);
  };
  render() {
    return !this.props.workingPYE.booly ? (
      <div>
        <h1 className="m-0 p-0">Create a digital asset !</h1>
        <Form>
          <hr></hr>
          {/* NAME INPUT */}
          <Input
            type="text"
            name="pye_name"
            style={{
              fontSize: "2em",
              height: "2em",
              width: "80%",
              float: "left",
            }}
            value={this.props.workingPYE.name}
            id="name"
            placeholder="Name your digital asset"
            onChange={this.onChangeName}
          />
          {/* SYMBOL INPUT */}
          <Input
            type="text"
            name="pye_name"
            style={{
              fontSize: "2em",
              height: "2em",
              width: "20%",
              float: "left",
            }}
            value={this.state.symbol}
            id="symbol"
            placeholder="$YMBOL"
            onChange={this.onChangeSym}
          />
          {/* DESCRIPTION INPUT */}
          <Input
            value={this.state.desc}
            onChange={this.onChangeDesc}
            type="text"
            name="pye_desc"
            id="desc"
            placeholder="Describe your digital asset"
            bssize="lg"
            style={{ fontSize: "2em", height: "2em" }}
          />
          {/* FORMAT INPUT */}
          <div className="row" style={{ height: "450px" }}>
            <h2 className="ml-5 mt-2 mb-0 p-0">Choose a Format !</h2>
            <div className="col-4 p-5" style={{ height: "420px" }}>
              <img src={this.state.formatShow} />
            </div>
            <div className="col-8 p-5" style={{ height: "420px" }}>
              <b>width: {this.state.formatX}</b>
              <CustomInput
                type="range"
                id="xIn"
                min={3}
                max={8}
                style={{ marginBottom: "2em" }}
                value={this.state.formatX}
                onChange={this.onChangeFX}
              />

              <b>height: {this.state.formatY}</b>
              <CustomInput
                type="range"
                id="yIn"
                min={3}
                max={8}
                style={{ marginTop: "2em" }}
                value={this.state.formatY}
                onChange={this.onChangeFY}
              />
            </div>
          </div>

          {/* RANDOMNESS INPUT */}
          <InputGroup>
            <Input
              type="button"
              style={{
                background: this.state.bg,
                color: this.state.col,
                fontSize: "2em",
                height: "2em",
                width: "10%",
              }}
              onClick={this.onVRF}
              value={this.state.VRF ? "ON" : "OFF"}
            />

            <Input
              type="text"
              id="vrftxt"
              value={this.state.VRF ? "" : this.state.JSRN}
              style={{ fontSize: "2em", height: "2em", width: "80%" }}
              onChange={this.onChangeVRF}
            />
          </InputGroup>
          <label>
            Unique ID (optional)
            <Button
              className="btn btn-info"
              style={{
                borderRadius: "9px",
                height: "18px",
                width: "18px",
                textAlign: "center",
                fontSize: "0.8em",
                color: "ivory",
                padding: "0",
                marginLeft: "1em",
              }}
              onClick={this.onHelp}
            >
              ?
            </Button>
          </label>
          {/* SUBMIT FORM BUTTON */}
          <Button
            onClick={this.onClick}
            bssize="lg"
            style={{
              marginTop: "2em",
              color: "lightgrey",
              background: "#9f95c3",
              fontSize: "2em",
              height: "2em",
              width: "100%",
            }}
          >
            START CREATING{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bricks"
              viewBox="0 0 16 16"
            >
              <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" />
            </svg>
          </Button>
        </Form>
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  workingPYE: state.pyeState.workingPYE,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  updateWPdesc,
  updateWPname,
  updateWPsym,
})(MaskOne);
