import React, { Component } from "react";
import { Button, InputGroup, Input, CustomInput, Form } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import {
  getPyeAssets,
  getPyeData,
  createPye,
  discardPye,
} from "../../action/pyeActions";
import { addLayer } from "../../action/layerActions";
/* 
const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
/* */
class LayerInput extends Component {
  state = {
    layerType: "empty",
    layerFeed: "static",
    file: null,
    layerName: "",
    layerID: 0,
    fileURL: null,
    buffer: null,
    check: "orange",
    urlList: [],
  };
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    addLayer: PropTypes.func,
    layers: PropTypes.array,
  };
  /*
  captureFile = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };

  submitFile = (e) => {
    e.preventDefault();
    // console.log("file submitted");
    // console.log(this.state.buffer);

    if (this.state.buffer && this.state.layerType === "empty") {
      ipfs.add(this.state.buffer).then((result, err) => {
        // console.log('Ipfs Result', result);

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
        // console.log(this.state);
        const newLayer = {
          booly: true,
          layerID: this.props.layers.length,
          layerType: this.state.layerType,
          layerOracle: {
            type: this.state.layerFeed,
            name: this.state.layerFeed,
            stamp: new Date(),
          },
          layerFS: {
            user: "",
            pye: "ipfs/",
            file: result.path,
            url: `https://ipfs.io/ipfs/{result.path}`,
          },
          layerName: this.state.layerName,
          layerExternal: {
            abi: {},
            adr: 0x0,
            function: "",
            data: {},
          },
        };

        this.props.addLayer(newLayer);
      });
    } else {
      const newLayer = {
        booly: true,
        layerID: this.props.layers.length,
        layerType: this.state.layerType,
        layerOracle: {
          type: this.state.layerFeed,
          name: this.state.layerFeed,
          stamp: new Date(),
        },
        layerFS: {
          user: "",
          pye: "",
          file: "",
          url: "",
        },
        layerName: this.state.layerName,
        layerExternal: {
          abi: {},
          adr: 0x0,
          function: "",
          data: {},
        },
      };

      this.props.addLayer(newLayer);
    }
  };
/* */
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
  render() {
    let empty = false;
    let allowed = [];
    if (this.state.layerType === "form") allowed = [".svg"];
    if (this.state.layerType === "typo") allowed = [".ttf"];
    if (this.state.layerType === "img") allowed = [".jpg", ".gif", ".png"];
    if (this.state.layerType === "audio")
      allowed = [".mp3", ".wav", ".aiff", ".midi"];
    if (this.state.layerType === "video") allowed = [".f4v", ".mp4"];

    return (
      <div>
        <Form onSubmit={console.log("wow") /*this.submitFile*/}>
          <InputGroup bssize="normal">
            <Input
              type="select"
              bssize="normal"
              name="LayerData"
              id="LayerData"
              onChange={this.onChangeData}
            >
              <option name="default" value="empty" bssize="normal">
                Choose Layer Type
              </option>
              <option name="empty" value="empty" bssize="normal">
                Empty
              </option>
              <option name="form" value="form" bssize="normal">
                SVG Form
              </option>
              <option name="typo" value="typo" bssize="normal">
                Typography
              </option>
              <option name="img" value="img" bssize="normal">
                Images
              </option>
              <option name="audio" value="audio" bssize="normal">
                Audio
              </option>
              <option name="video" value="video" bssize="normal">
                Video
              </option>
            </Input>

            <>
              {this.state.layerType === "empty"
                ? (empty = true)
                : (empty = false)}

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
              <option name="default" value="empty">
                Choose Oracle Feed
              </option>
              <option name="static" value="empty">
                No Feed
              </option>
              <option name="pfeed" value="pfeed">
                Price Feed
              </option>
              <option name="count" value="count">
                Count Feed
              </option>
              <option name="api" value="api">
                API Feed
              </option>
              <option name="time" value="time">
                Timeline Feed
              </option>
              <option name="sports" value="sports">
                Sport Results Feed
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
            <Button type="submit" className="btn btn-success">
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
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  layers: state.layerState.layers,
});

export default connect(mapStateToProps, { addLayer })(LayerInput);
