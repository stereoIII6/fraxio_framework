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
//          @id :: FR-94527                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-94527 is Layer Input for the React Frontend.             //
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
import { Button, InputGroup, Input, Form } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { startSlicing } from "../../action/pyeActions";

const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

/* */
class LayerInput extends Component {
  static propTypes = {
    bake: PropTypes.bool,
    slice: PropTypes.bool,
    activeL: PropTypes.number,
    frame: PropTypes.bool,
    activeK: PropTypes.number,
    stateK: PropTypes.object,
    pyes: PropTypes.array,
    pyeDrafts: PropTypes.array,
    pyeSamples: PropTypes.array,
    users: PropTypes.array,
    cols: PropTypes.object,
    PYE: PropTypes.object,
    INIT: PropTypes.object,
    startSlicing: PropTypes.func,
  };
  state = {
    layerType: "no",
    layerFeed: "no",
    layerText: "",
    layerFont: "",
    file: null,
    layerName: "",
    layerID: 0,
    fileURL: null,
    buffer: null,
    check: "orange",
    urlList: [],
    cols:
      this.props.lighting === "light"
        ? this.props.cols.light
        : this.props.lighting === "dark"
        ? this.props.cols.light
        : this.props.lighting === "irie"
        ? this.props.cols.light
        : this.props.cols.light,
    PYE: this.props.PYE,
    INIT: this.props.INIT,
  };
  captureFile = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  newSlice = () => {
    return this.props.INIT.layers[0];
  };
  submitFile = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    const newLayer = {
      layerID: this.props.PYE.layers.length, // layerID
      layerName: this.state.layerName, // layerName
      layerType: this.state.layerType, // Type of Layer // empty / image / text / form / audio / video
      layerData: {
        access: {
          private: false,
          limitedTo: [],
        }, // access object
        file: null, // IPFS hash
        text: null, // text to display in text layer
        font: null, // font to display in text layer
      },
      layerOracle: {
        // oracle object
        type: "",
        name: this.state.layerFeed, // Oracle Feed Name
        stamps: [Date()], // THE GRAPH IMPORT timestamps of Oracle
        starter: Date(), // Initial Custom Start Price at Mint // Default Real Time Value NOW
      },
      exTrigger: {
        // External Trigger Object
        abi: null, // contract ABI
        contractAdr: null, // contract address
        funcName: null, // function to call
        funcParams: null, // params to call in function (optional)
      },
      keys: [
        {
          keyID: 0,
          keyParams: {
            v: 0, // oracle value TRIGGER
            e: false, // external triggered by thhis key boolean
            x: 0, // x position in % (-100 - 100)
            y: 0, // y position in % (-100 - 100)
            z: 90, // fixed scale (10 - 500)
            p: 0, // x/y ratio // default 0(1:1) // min -1(10:1) max 1(1:10)
            o: 100, // opacity (0 - 100)
            r: 0, // rotation (-360 - 360)
            b: 0, // border thickness (1 - 5)
            c: null, // font and border color in #HEX // (#000000 - #ffffff)
            h: null, // bgcolor in #HEX // (#000000 - #ffffff)
            lc: 0, // left cut in timeline from start // video and audio only
            rc: 0, // right cut in timeline from end // video and audio only
            pl: false, // play timeline // video and audio only
            re: false, // restart play timeline // video and audio only
            ps: 0, // pause in timeline // video and audio only
            gp: 0,
            gs: 0,
            st: false, // stop and reset// video and audio only
            lp: false, // loop // video and audio only
            vl: 63, // audio volume // video and audio only
            pn: 63, // l r pan //
          },
        },
      ],
    };
    console.log(this.state.layerType);
    if (
      this.state.buffer &&
      (this.state.layerType === "img" ||
        this.state.layerType === "form" ||
        this.state.layerType === "audio" ||
        this.state.layerType === "video")
    ) {
      ipfs.add(this.state.buffer).then((result, err) => {
        console.log("Ipfs Result", result);

        if (err) {
          // console.error(err);
          return;
        }
        this.setState({
          fileURL: `https://ipfs.io/ipfs/${result.path}`,
          file: result.path,

          check: "orange",
          urlList: [...this.state.urlList, result.path],
        });
        let layers = this.props.PYE.layers;
        newLayer.layerData.file = result.path;
        newLayer.layerData.text = "";
        newLayer.layerData.font = "comfortaa";
        layers.push(newLayer);
        const lc = this.props.PYE.layers.length - 1;
        this.props.startSlicing(layers, lc);
      });
    } else if (this.state.layerType === "typo") {
      let layers = this.props.PYE.layers;
      newLayer.layerData.file = "";
      newLayer.layerData.text = this.state.layerText;
      newLayer.layerData.font = this.state.layerFont;
      layers.push(newLayer);
      const lc = this.props.PYE.layers.length - 1;
      this.props.startSlicing(layers, lc);
    } else {
      let layers = this.props.PYE.layers;
      newLayer.layerData.file = "";
      newLayer.layerData.text = this.state.layerText;
      newLayer.layerData.font = this.state.layerFont;
      layers.push(newLayer);
      const lc = this.props.PYE.layers.length - 1;
      this.props.startSlicing(layers, lc);
    }
  };

  handleClick = (e) => {
    document.getElementById("upload").click();
    document.getElementById("upload").onchange = () => {
      this.setState({
        file: document.getElementById("upload").value,
      });
      console.log(this.state.file);
    };
  };
  onChangeData = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerType: e.target.value });
  };
  onChangeFeed = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerFeed: e.target.value });
  };
  onChangeName = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerName: e.target.value });
  };
  onChangeText = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerText: e.target.value });
  };
  onChangeFont = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerFont: e.target.value });
  };
  render() {
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    let empty = false;
    let ready = true;
    let allowed = [];
    if (this.state.layerType === "form") allowed = [".svg"];
    if (this.state.layerType === "typo") allowed = [".ttf"];
    if (this.state.layerType === "img") allowed = [".jpg", ".gif", ".png"];
    if (this.state.layerType === "audio")
      allowed = [".mp3", ".wav", ".aiff", ".midi"];
    if (this.state.layerType === "video") allowed = [".f4v", ".mp4"];
    if (
      this.state.layerFeed !== "no" &&
      this.state.layerType !== "no" &&
      this.state.layerName.length > 2
    ) {
      ready = false;
      console.log(ready);
    }
    return (
      <div>
        <Form onSubmit={this.submitFile}>
          <InputGroup bssize="normal">
            <Input
              type="select"
              bssize="normal"
              name="LayerData"
              id="LayerData"
              onChange={this.onChangeData}
            >
              <option name="no" value="no" bssize="normal">
                Choose a Layer Media Type
              </option>
              <option name="empty" value="empty" bssize="normal">
                Empty Layer
              </option>
              <option name="form" value="form" bssize="normal">
                Polygon
              </option>
              <option name="typo" value="typo" bssize="normal">
                Text
              </option>
              <option name="img" value="img" bssize="normal">
                Images
              </option>
              <option name="audio" value="audio" bssize="normal" disabled>
                Audio
              </option>
              <option name="video" value="video" bssize="normal" disabled>
                Video
              </option>
            </Input>

            <>
              {this.state.layerType === "no" ||
              this.state.layerType === "empty" ||
              this.state.layerType === "typo"
                ? (empty = true)
                : (empty = false)}
              {!empty ? (
                <Button
                  onClick={this.handleClick}
                  id="upbtn"
                  className="btn btn-info"
                  disabled={empty}
                >
                  {this.state.file !== null ? (
                    this.state.file
                  ) : (
                    <div>
                      Upload
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-bar-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </div>
                  )}
                </Button>
              ) : this.state.layerType === "typo" ? (
                <div>
                  <Input
                    type="text"
                    bssize="normal"
                    placeholder="Your Text Here "
                    name="layerText"
                    id="layerText"
                    style={{ display: "d-inline", width: "60%", float: "left" }}
                    onChange={this.onChangeText}
                  />
                  <Input
                    type="select"
                    bssize="normal"
                    name="layerFont"
                    id="layerFont"
                    style={{ display: "d-inline", width: "40%", float: "left" }}
                    onChange={this.onChangeFont}
                  >
                    <option name="no" value="no">
                      Choose a Font
                    </option>
                    <option name="arial" value="arial">
                      Arial
                    </option>
                    <option name="courier" value="courier">
                      Courier
                    </option>
                    <option name="comfortaa" value="comfortaa">
                      Comfortaa
                    </option>
                  </Input>
                </div>
              ) : null}
              <input
                type="file"
                id="upload"
                accept={allowed}
                ref={this.hiddenFileInput}
                onChange={this.captureFile}
                style={{ display: "none" }}
              />
            </>

            <Input
              type="select"
              bssize="normal"
              style={{ width: "90px" }}
              name="LayerFeed"
              id="LayerFeed"
              onChange={this.onChangeFeed}
            >
              <option name="no" value="no">
                Choose Real World Data
              </option>
              <option name="static" value="static">
                No Data Feed
              </option>
              <option name="count" value="count" disabled>
                Count Data Feed
              </option>
              <option name="cryptoPrices" value="crypto">
                Crypto Price Feeds
              </option>
              <option name="currencyPrices" value="currency">
                Currency Price Feeds
              </option>
              <option name="commodPrices" value="commodity">
                Commodity Price Feeds
              </option>
              <option name="weatherFeeds" value="weather" disabled>
                Weather Data Feeds
              </option>
              <option name="time" value="time" disabled>
                Timeline Data Feed
              </option>
              <option name="api" value="api" disabled>
                External API Data Feed
              </option>
            </Input>

            <Input
              type="text"
              bssize="normal"
              placeholder="Name"
              name="LayerName"
              id="LayerName"
              onChange={this.onChangeName}
            />
            <Button type="submit" className="btn btn-success" disabled={ready}>
              +{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-layers-half"
                viewBox="0 0 16 16"
              >
                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
              </svg>
            </Button>
          </InputGroup>
          <label>Create a new Layer</label>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  slice: state.pyeState.slice,
  activeL: state.pyeState.activeL,
  frame: state.pyeState.frame,
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, { startSlicing })(LayerInput);
