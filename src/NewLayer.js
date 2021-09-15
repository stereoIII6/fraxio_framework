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
import {
  Button,
  InputGroup,
  Input,
  Form,
  CustomInput,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, addSlice } from "./action/userActions.js";

const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

/* */
class NewLayer extends Component {
  static propTypes = {
    feeds: PropTypes.array,
    getUser: PropTypes.func,
    addSlice: PropTypes.func,
    newImla: PropTypes.object,
  };
  state = {
    layerType: "no",
    layerFeed: "no",
    layerFeedName: "no",
    layerFeedValue: 100,
    loVal: 80,
    hiVal: 120,
    layerText: "",
    layerFont: "",
    layerName: "",
    layerGroup: "",
    checkBox: false,
    file: null,
    fileURL: null,
    buffer: null,
    check: "orange",
    urlList: [],
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
  newSlice = (e) => {
    e.preventDefault();
    const newLayer = {};
    console.log("testing output newslice btn");
  };
  submitFile = (e) => {
    e.preventDefault();
    let newLayer = {};
    console.log(this.state.layerType, this.props.newImla);
    if (
      this.state.buffer &&
      (this.state.layerType === "img" ||
        this.state.layerType === "form" ||
        this.state.layerType === "audio" ||
        this.state.layerType === "video")
    ) {
      console.log("file submitted");
      console.log(this.state.buffer);
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
        console.log("imla // ", this.props.newImla.iData.layers.length);
        newLayer = {
          lId: this.props.newImla.iData.layers.length,
          lConf: {
            name: this.state.layerName,
            type: this.state.layerType,
            group: this.state.layerGroup,
            master: this.state.checkBox,
          },
          lData: {
            hash: this.state.file,
            url: this.state.fileURL,
            text: "",
            font: "",
            auth: {
              public: true,
            },
          },
          lFeed: {
            feed: this.state.layerFeed,
            oracle: this.state.layerFeedName,
            value: this.state.layerFeedValue,
            hi: this.state.hiVal,
            lo: this.state.loVal,
          },
          keys: [
            {
              kId: 0,
              f: this.state.layerFeed,
              o: this.state.layerFeedName,
              v: this.state.layerFeedValue * 0.8,
              x: 0,
              y: 0,
              z: 1,
              q: 1,
              r: 0,
              a: 100,
            },
            {
              kId: 1,
              f: this.state.layerFeed,
              o: this.state.layerFeedName,
              v: this.state.layerFeedValue * 1.2,
              x: 0,
              y: 0,
              z: 1,
              q: 1,
              r: 0,
              a: 100,
            },
          ],
        };
        console.log(newLayer);
        this.props.addSlice(newLayer);
        this.props.doToggleEx();
      });
    } else if (this.state.layerType === "typo") {
    } else {
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
  onChangeMouseFX = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({
      layerFeedName: e.target.value,
      layerFeedValue: null,
    });
  };
  onChangePriceFeeds = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({
      layerFeedName: e.target.id,
      layerFeedValue: e.target.value,
      loVal: e.target.value * 0.8,
      hiVal: e.target.value * 1.2,
    });
  };
  onChangeName = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerName: e.target.value });
  };
  onChangeGroup = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ layerGroup: e.target.value });
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
  onCheckBox = (e) => {
    // e.preventDefault();
    console.log(this.state.checkBox, e.target);
    this.setState({ checkBox: !this.state.checkBox });
  };
  slideLo = (e) => {
    console.log(e);
    this.setState({
      loVal: (e.target.value * this.state.layerFeedValue) / 100,
    });
  };
  slideHi = (e) => {
    this.setState({
      hiVal: (e.target.value * this.state.layerFeedValue) / 100,
    });
  };
  render() {
    let empty = false;
    let ready = true;
    let allowed = [".jpg", ".gif", ".png"];
    if (this.state.layerType === "form") allowed = [".svg"];
    if (this.state.layerType === "typo") allowed = [".ttf"];
    if (this.state.layerType === "img") allowed = [".jpg", ".gif", ".png"];
    if (this.state.layerType === "cllct")
      allowed = [".jpg", ".gif", ".png", ".svg"];
    if (this.state.layerType === "audio")
      allowed = [".mp3", ".wav", ".aiff", ".midi"];
    if (this.state.layerType === "video") allowed = [".f4v", ".mp4"];
    if (
      this.state.layerFeed !== "no" &&
      this.state.layerType !== "no" &&
      this.state.layerName.length > 2
    ) {
      ready = false;
    }
    return (
      <div>
        <Form onSubmit={this.submitFile}>
          <InputGroup>
            <Input
              type="select"
              bssize="normal"
              name="LayerData"
              id="LayerData"
              onChange={this.onChangeData}
              style={{
                width: this.state.layerType === "no" ? "100%" : "30%",
              }}
            >
              <option name="no" value="no" bssize="normal">
                Choose a Layer Media
              </option>
              <option name="empty" value="empty" bssize="normal">
                Empty Layer
              </option>
              <option name="img" value="img" bssize="normal">
                Images
              </option>
              <option name="img" value="cllct" bssize="normal">
                Collectible Layer
              </option>
              <option name="form" value="form" bssize="normal">
                Polygon
              </option>
              <option name="typo" value="typo" bssize="normal">
                Text
              </option>
              <option name="audio" value="audio" bssize="normal">
                Audio
              </option>
              <option name="video" value="video" bssize="normal">
                Video
              </option>
            </Input>

            <>
              {this.state.layerType === "no" ||
              this.state.layerType === "empty" ||
              this.state.layerType === "cllct" ||
              this.state.layerType === "typo"
                ? (empty = true)
                : (empty = false)}
              {!empty ? (
                <div style={{ height: "42px", overflowY: "hidden" }}>
                  <Button
                    onClick={this.handleClick}
                    id="upbtn"
                    className="btn btn-info"
                    disabled={empty}
                    style={{
                      width:
                        this.state.layerType === "img" ||
                        this.state.layerType === "audio" ||
                        this.state.layerType === "video" ||
                        this.state.layerType === "form"
                          ? "100%"
                          : 0,
                      marginTop: "-32px",
                    }}
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
                </div>
              ) : this.state.layerType === "cllct" ? null : this.state
                  .layerType === "typo" ? (
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
          </InputGroup>
          <div style={{ fontSize: "0.3em", marginBottom: "2em" }}>
            {this.state.layerType === "no" ? (
              <i>Select type of Media you want on this Layer</i>
            ) : this.state.layerType === "typo" ? (
              <i>Enter Text &amp; Select Font for this Layer</i>
            ) : this.state.layerType === "empty" ? (
              <i>Empty Layers are used for external Triggers READ MORE</i>
            ) : (
              <i>Upload your File</i>
            )}
          </div>
          <InputGroup>
            <Input
              type="select"
              bssize="normal"
              name="LayerFeed"
              id="LayerFeed"
              onChange={this.onChangeFeed}
              style={{
                width:
                  this.state.layerFeed === "no" ||
                  this.state.layerFeed === "static"
                    ? "100%"
                    : this.state.layerFeed === "price"
                    ? "20%"
                    : this.state.layerFeed === "mouse"
                    ? "50%"
                    : "100%",
              }}
            >
              <option name="no" value="no">
                Choose Real World Data
              </option>
              <option name="static" value="static">
                No Data Feed
              </option>
              <option name="static" value="mouse">
                Mouse Data
              </option>
              <option name="count" value="count" disabled>
                Count Data Feed
              </option>
              <option name="price" value="price">
                Price Feeds
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
            {this.state.layerFeed === "mouse" ? (
              <Input
                type="select"
                bssize="normal"
                name="MouseFX"
                id="MouseFX"
                onChange={this.onChangeMouseFX}
                value={this.state.layerFeedName}
                style={{
                  width: "50%",
                }}
              >
                <option name="no" value="no">
                  Choose Mouse Effects
                </option>
                <option name="pXYstrong" value="pXYstrong">
                  ParalaxXY Strong
                </option>
                <option name="pYstrong" value="pYstrong">
                  ParalaxY Strong
                </option>
                <option name="pXstrong" value="pXstrong">
                  ParalaxX Strong
                </option>
                <option name="pXYsmooth" value="pXYsmooth">
                  ParalaxXY Smooth
                </option>
                <option name="pYsmooth" value="pYsmooth">
                  ParalaxY Smooth
                </option>
                <option name="pXsmooth" value="pXsmooth">
                  ParalaxX Smooth
                </option>
                <option name="rXY" value="rXY">
                  RotateXY
                </option>
                <option name="rY" value="rY">
                  RotateX
                </option>
                <option name="rX" value="rX">
                  RotateY
                </option>
              </Input>
            ) : null}
            {this.state.layerFeed === "price" ? (
              <div style={{ width: "80%", float: "left" }}>
                <Input
                  type="number"
                  style={{ width: "20%", float: "left" }}
                  id="loVal"
                  name="loVal"
                  value={this.state.loVal}
                  disabled
                />
                <Input
                  type="select"
                  bssize="normal"
                  name="PriceFeeds"
                  id="PriceFeeds"
                  onChange={this.onChangePriceFeeds}
                  style={{
                    width: "60%",
                    float: "left",
                  }}
                >
                  <option name="no" value="no" key="0">
                    Choose Price Feeds
                  </option>
                  {this.props.feeds.map((feed) => (
                    <option name={feed.name} value={feed.value} key={feed.name}>
                      {feed.name + " - " + feed.value}
                    </option>
                  ))}
                </Input>
                <Input
                  type="number"
                  style={{ width: "20%", float: "left" }}
                  id="hiVal"
                  name="hiVal"
                  value={this.state.hiVal}
                  disabled
                />
              </div>
            ) : null}
          </InputGroup>
          <div
            style={{
              fontSize: "0.3em",
              marginBottom: this.state.layerFeed === "price" ? "0em" : "2em",
            }}
          >
            {this.state.layerFeed === "no" ||
            this.state.layerFeed === "static" ? (
              <i>Select Data Feed to interact with Layer</i>
            ) : this.state.layerFeed === "mouse" ? (
              <i>Select Mouse Effect</i>
            ) : (
              <i>
                Select an Price Feed and set the From State (Lower Value) and
                the To State (Higher Value)
              </i>
            )}
          </div>
          {this.state.layerFeed === "price" ? (
            <div>
              <InputGroup>
                <CustomInput
                  id="loVal"
                  type="range"
                  min={0}
                  value={(this.state.loVal / this.state.layerFeedValue) * 100}
                  max={100}
                  style={{ width: "50%" }}
                  onChange={this.slideLo}
                />
                <CustomInput
                  id="hiVal"
                  type="range"
                  min={100}
                  value={(this.state.hiVal / this.state.layerFeedValue) * 100}
                  max={1000}
                  style={{ width: "50%" }}
                  onChange={this.slideHi}
                />
              </InputGroup>
              <div style={{ fontSize: "0.3em", marginBottom: "2em" }}>
                <i>Use the Sliders to Edit From State and To State Values</i>
              </div>
            </div>
          ) : null}
          <InputGroup>
            <Input
              type="text"
              bssize="normal"
              placeholder="Name"
              name="LayerName"
              id="LayerName"
              onChange={this.onChangeName}
            />
            <Input
              type="text"
              bssize="normal"
              placeholder="Group Name"
              name="LayerGroup"
              id="LayerGroup"
              onChange={this.onChangeGroup}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Input
                  type="checkbox"
                  id="GroupMaster"
                  name="GroupMaster"
                  addon
                  onChange={this.onCheckBox}
                  disabled={this.state.layerGroup === "" ? true : false}
                />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <div className="row">
            <div
              className="col-5"
              style={{ fontSize: "0.3em", marginBottom: "2em" }}
            >
              <i>Enter a Layer Name</i>
            </div>
            <div
              className="col-5"
              style={{ fontSize: "0.3em", marginBottom: "2em" }}
            >
              <i>
                Enter a Group Name (optional) <Button id="help">?</Button>
              </i>
            </div>
            <div
              className="col-2"
              style={{ fontSize: "0.3em", marginBottom: "2em" }}
            >
              <i>
                Master <Button id="help">?</Button>
              </i>
            </div>
          </div>
          <Button type="submit" className="btn btn-success" disabled={ready}>
            <img
              src="https://ipfs.io/ipfs/QmettwE4WigZAiEQ5EFNR9hJGiYohv5fhG5zGZVBDLvora"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  feeds: state.userState.feeds,
  newImla: state.userState.newImla,
});

export default connect(mapStateToProps, { getUser, addSlice })(NewLayer);
