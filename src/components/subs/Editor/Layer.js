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
//          @id :: FR-90927                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90927 is Layer Editor for the React Frontend.            //
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
import { Button, InputGroup, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteLayer,
  editLayer,
  editLayers,
  loadLayer2work,
} from "../../action/layerActions";
import { setWork } from "../../action/keyActions";
import PriceFeeder from "./PriceFeeder";

class Layer extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    coloris: PropTypes.object,
    layers: PropTypes.array,
    keys: PropTypes.array,
    deleteLayer: PropTypes.func,
    editLayer: PropTypes.func,
    editLayers: PropTypes.func,
    loadLayer2work: PropTypes.func,
    setWork: PropTypes.func,
  };
  state = {
    colAuth: this.props.coloris.palm,
    auth: false,
    ext: false,
    layers: [],
  };
  onGoEditLayer = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  };
  onGoKeyEditor = (e) => {
    e.preventDefault();
    // load workingLayer By layerID
    console.log(this.props.layers[e.target.id]);
    this.props.loadLayer2work(this.props.layers[e.target.id]);
    // set working keyFrame booly true
    const key = {
      booly: true,
      edit: true,
      active: 0,
      keys: [
        {
          layerID: e.target.id,
          keyID: 0,
          oracle: this.props.workingLayer.layerOracle.name,
          oracleState: this.props.workingLayer.layerOracle.initValue,
          layerParams: {
            x: 0,
            y: 0,
            o: 100,
            r: 0,
            z: 90,
          },
        },
      ],
      initKey: {
        layerID: e.target.id,
        keyID: 0,
        oracle: this.props.workingLayer.layerOracle.name,
        oracleState: this.props.workingLayer.layerOracle.initValue,
        layerParams: {
          x: 0,
          y: 0,
          o: 100,
          r: 0,
          z: 90,
        },
      },
    };
    this.props.setWork(key);
  };
  onDeleteLayer = (e) => {
    e.preventDefault();
    console.log(this.props.layers, e.target.id);
    let newLayers = this.props.layers.filter(
      (layer) => layer.layerID !== parseInt(e.target.id)
    );
    const len = newLayers.length;
    let x = 0;
    console.log("delete Layer ACT //" + newLayers, len);
    while (x < len) {
      newLayers[x].layerID = x;
      x++;
    }
    console.log("deleted Layer ACT //" + newLayers, len);
    this.props.deleteLayer(newLayers);
  };

  moveLayerUp = (e) => {
    e.preventDefault();
    const h = parseInt(e.target.id);
    const l = h - 1;
    if (e.target.id !== "1") {
      let newLayers = this.props.layers;
      let highLayer = newLayers[h];
      let lowLayer = newLayers[l];
      highLayer.layerID = l;
      lowLayer.layerID = h;
      newLayers[h] = lowLayer;
      newLayers[l] = highLayer;
      const passLayers = newLayers.sort((a, b) => a.layerID - b.layerID);
      console.log(passLayers);
      this.props.editLayers(passLayers);
      // this.setState({ layers: passLayers });
    }
  };
  setOracle = (e) => {
    console.log(e.target.value);
    let wLayer = this.props.workingLayer;
    const split = e.target.value.split(",");
    wLayer.layerOracle.initValue = split[0];
    wLayer.layerOracle.param = split[1];
    this.props.editLayer(wLayer);
  };
  onExternal = (e) => {
    e.preventDefault();
    this.setState({ ext: !this.state.ext });
  };
  onAuth = (e) => {
    e.preventDefault();
    // console.log("wowzers");
    this.state.auth
      ? this.setState({ colAuth: this.props.coloris.palm, auth: false })
      : this.setState({ colAuth: this.props.coloris.pur, auth: true });
  };
  render() {
    // console.log(this.props);
    const id = this.props.layerid;
    const layer = this.props.layers[id];
    const {
      mint,
      sky,
      pur,
      grey,
      palm,
      dgrey,
      white,
      tomato,
    } = this.props.coloris;

    // console.log(layer.layerOracle.name);
    return (
      <div
        className="alert"
        style={{
          background: grey,
          border: "2px solid",
          borderColor: dgrey,
          marginBottom: "5px",
          padding: "10px",
        }}
      >
        <div
          className="row"
          style={{
            height: "44px",
            padding: "0",
            marginBottom: "3px",
            width: "100%",
            marginLeft: "0px",
          }}
        >
          <div
            className="col-1"
            style={{ color: pur, margin: "0", padding: "0" }}
          >
            <div
              style={{
                width: "100%",
                color: palm,

                height: "44px",
                paddingTop: "0px",
                paddingLeft: "7px",
                textAlign: "center",
              }}
            >
              {layer.layerID}
            </div>
          </div>
          <div
            className="col-2"
            style={{
              color: pur,
              position: "relative",
              margin: "0",
              padding: "0",
            }}
          >
            <div
              style={{
                width: "100%",
                color: pur,
                height: "22px",
                textAlign: "center",
                position: "relative",
                padding: "0",
                margin: "0",
                top: "0",
                left: "0",
                opacity: layer.layerID === 1 ? 0 : 1,
              }}
              onClick={this.moveLayerUp}
              id={layer.layerID}
            >
              <svg
                id={layer.layerID}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-layer-forward"
                viewBox="0 0 12 12"
              >
                <path
                  fillRule="evenodd"
                  id={layer.layerID}
                  d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>

          <div
            className="col-5"
            style={{
              color: pur,
              textAlign: "center",
              margin: "0",
              padding: "0",
            }}
          >
            {layer.layerName}
          </div>
          <div
            className="col-2"
            style={{ color: white, margin: "0", padding: "0" }}
          >
            <Button
              style={{
                width: "100%",
                color: mint,
                background: palm,
                height: "44px",
                paddingTop: "0px",
              }}
              onClick={this.onGoEditLayer}
              id={layer.layerID}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear-fill"
                viewBox="0 0 16 16"
                id={layer.layerID}
              >
                <path
                  id={layer.layerID}
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                />
              </svg>
            </Button>
          </div>
          <div
            className="col-2"
            id={layer.layerID}
            style={{ color: white, margin: "0", padding: "0" }}
          >
            <Button
              id={layer.layerID}
              style={{
                width: "100%",
                color: white,
                background: tomato,
                height: "44px",
                paddingTop: "0px",
              }}
              onClick={this.onDeleteLayer}
            >
              <svg
                id={layer.layerID}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  id={layer.layerID}
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "44px",
            padding: "0",
            marginBottom: "1px",
            width: "100%",
            marginLeft: "0px",
          }}
        >
          <div
            className="col"
            style={{ color: white, margin: "0", padding: "0" }}
          >
            <div style={{ width: "100%", color: palm }}>
              {
                (console.log(layer),
                layer.layerOracle.name === "empty" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-vr"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 12V4a1 1 0 0 1 1-1h2.5V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5v-1H4a1 1 0 0 1-1-1zm6.5 1v1H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.5v1H12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9.5zM8 16a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5z" />
                  </svg>
                ) : layer.layerOracle.name === "crypto" ? (
                  // integrate selection of price feeds

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-graph-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                ) : layer.layerOracle.name === "count" ? (
                  // integrate single param data feed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list-ol"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                    />
                    <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
                  </svg>
                ) : layer.layerOracle.name === "currency" ? (
                  // integrate multi param data feed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-newspaper"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                ) : layer.layerOracle.name === "time" ? (
                  // integrate time data feed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg>
                ) : layer.layerOracle.name === "commodity" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trophy-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-vr"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 12V4a1 1 0 0 1 1-1h2.5V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5v-1H4a1 1 0 0 1-1-1zm6.5 1v1H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.5v1H12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9.5zM8 16a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5z" />
                  </svg>
                ))
              }
            </div>
          </div>
          <div
            className="col"
            style={{ color: white, margin: "0", padding: "0" }}
          >
            <div style={{ width: "100%", color: palm }}>
              {layer.layerType === "form" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-puzzle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z" />
                </svg>
              ) : layer.layerType === "typo" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-type"
                  viewBox="0 0 16 16"
                >
                  <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
                </svg>
              ) : layer.layerType === "img" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-bounding-box"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              ) : layer.layerType === "audio" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-headphones"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                </svg>
              ) : layer.layerType === "video" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-play-btn-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              ) : layer.layerType === "empty" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-layers"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-layers"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                </svg>
              )}
            </div>
          </div>
          <div
            className="col"
            style={{ color: "ivory", margin: "0", padding: "0" }}
          >
            <Button
              style={{ width: "100%", background: sky, color: palm }}
              onClick={this.onExternal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-code-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z" />
              </svg>
            </Button>
          </div>
          <div
            className="col"
            style={{ color: "ivory", margin: "0", padding: "0" }}
          >
            <Button
              style={{
                width: "100%",
                background: mint,
                color: this.state.colAuth,
              }}
              onClick={this.onAuth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-shield-lock-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                />
              </svg>
            </Button>
          </div>
          <div
            className="col"
            style={{ color: white, margin: "0", padding: "0" }}
            id={layer.layerID}
          >
            <Button
              style={{ width: "100%", background: grey, color: pur }}
              id={layer.layerID}
              onClick={this.onGoKeyEditor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                id={layer.layerID}
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  id={layer.layerID}
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  id={layer.layerID}
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <PriceFeeder
          oracle={layer.layerOracle.name}
          setOracle={this.setOracle}
        />
        {this.state.ext ? (
          <InputGroup id="extrigger" disabled>
            <b style={{ fontSize: "0.8em" }}>
              External Trigger (optional) <Button>?</Button>
            </b>
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder="CONTRACT ADDRESS"
            />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder="CONTRACT ABI"
            />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder="FUNCTION NAME"
            />
            <Input
              type="text"
              style={{ width: "100%" }}
              placeholder="PARAMS OBJECT"
            />
          </InputGroup>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  layers: state.layerState.layers,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, {
  deleteLayer,
  loadLayer2work,
  editLayers,
  editLayer,
  setWork,
})(Layer);
