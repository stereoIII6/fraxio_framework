import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlpha, setMove } from "./action/userActions";
import Draggable, { DraggableCore } from "react-draggable";
class Display extends Component {
  static propTypes = {
    format: PropTypes.object,
    newImla: PropTypes.object,
    layers: PropTypes.array,
    setAlpha: PropTypes.func,
    setMove: PropTypes.func,
  };

  state = {
    scaleValX: 0,
    scaleValY: 0,
    scaleDiff: 0,
    scaling: false,
    moveVal: 0,
    moveDiff: 0,
    turnVal: 0,
    turnDiff: 0,
    alphaVal: 0,
    alphaDiff: 0,
  };
  checkFormat = (f) => {
    if (Number(f.w) === Number(f.h)) {
      const factor = Number(f.w) / 600;
      console.log("w=", factor);
      return factor;
    }
    if (Number(f.w) > Number(f.h)) {
      const factor = Number(f.w) / 600;
      console.log("w>", factor);
      return factor;
    }
    if (Number(f.w) < Number(f.h)) {
      const factor = Number(f.h) / 600;
      console.log("w<", factor);
      return factor;
    }
  };
  handleStart = (e) => {
    e.preventDefault();
  };
  startAlpha = (e) => {
    e.preventDefault();
  };
  dragAlpha = (e) => {
    e.preventDefault();
    let o =
      (100 / Number(e.target.id * -1)) *
      (Number(e.target.id * -1) +
        Number(e.target.style.transform.slice(10, -3)));
    let editLayers = this.props.layers;
    editLayers[this.props.newImla.activeL].keys[
      this.props.newImla.activeK
    ].a = Number(o);
    this.props.setAlpha(editLayers);
  };
  stopAlpha = (e) => {
    e.preventDefault();
  };
  startMove = (e) => {
    e.preventDefault();
  };
  dragMove = (e) => {
    e.preventDefault();
  };
  stopMove = (e) => {
    e.preventDefault();
    let g = e.target.style.transform.slice(10, -1);
    let h = g.split(",");
    let x = Number(h[0].slice(0, -2));
    let y = h[1] ? Number(h[1].slice(0, -2)) : 0;
    console.log(x, y);

    let editLayers = this.props.layers;
    editLayers[this.props.newImla.activeL].keys[
      this.props.newImla.activeK
    ].x = Number(x);
    editLayers[this.props.newImla.activeL].keys[
      this.props.newImla.activeK
    ].y = Number(y);

    this.props.setMove(editLayers);
  };
  startTurn = (e) => {
    e.preventDefault();
  };
  dragTurn = (e) => {
    e.preventDefault();
    console.log(
      e.target.style.transform,
      document.getElementById("main" + e.target.id).style.width
    );
  };
  stopTurn = (e) => {
    e.preventDefault();
  };
  startScale = (e) => {
    e.preventDefault();
  };
  dragScale = (e) => {
    e.preventDefault();
    console.log(
      e.target.style.transform,
      document.getElementById("main" + e.target.id)
    );
  };
  stopScale = (e) => {
    e.preventDefault();
  };
  render() {
    let { format } = this.props;

    let displayFactor = this.checkFormat(format);
    console.log(format, displayFactor);
    let tokenWidth = format.w / displayFactor;
    let tokenHeight = format.h / displayFactor;
    let xPosCentered = (window.innerWidth - tokenWidth) / 2;

    return (
      <div id="displayScreen">
        <div
          id="visibleScreen"
          style={{
            width: tokenWidth,
            height: tokenHeight,
            left: `${xPosCentered}px`,
            top: `${200 + (600 - tokenHeight) / 2}px`,
          }}
        ></div>
        {this.props.layers.map((layer) => (
          <div
            key={layer.lId}
            id={"main" + layer.lId}
            style={{
              transform: `rotate(${
                layer.keys[this.props.newImla.activeK].r
              }deg)`,
              position: "absolute",
              width: tokenWidth * layer.keys[this.props.newImla.activeK].z,
              height:
                tokenHeight *
                layer.keys[this.props.newImla.activeK].z *
                layer.keys[this.props.newImla.activeK].q,
              left: `${xPosCentered +
                layer.keys[this.props.newImla.activeK].x}px`,
              top: `${200 +
                (600 - tokenHeight) / 2 +
                layer.keys[this.props.newImla.activeK].y}px`,
            }}
          >
            <Draggable
              onStart={this.startMove}
              onDrag={this.dragMove}
              onStop={this.stopMove}
            >
              <img
                src={layer.lData.url}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  opacity: layer.keys[this.props.newImla.activeK].a / 100,
                  transform: `rotate(${
                    layer.keys[this.props.newImla.activeK].r
                  }deg)`,
                }}
                key={layer.lId}
                id={layer.lId}
              />
            </Draggable>
            {this.props.newImla.activeL === layer.lId ? (
              <div>
                <Draggable
                  grid={[10, 10]}
                  onStart={this.startScale}
                  onDrag={this.dragScale}
                  onStop={this.stopScale}
                >
                  <img
                    src="https://ipfs.io/ipfs/QmUcpGBSFTS9xHJVEtderWvWuX1yzFzLLn8kEzX2EZtFFu"
                    alt=""
                    style={{
                      position: "absolute",
                      top: `${(600 - tokenHeight) / 2 + tokenHeight - 18}px`,
                      left: `${tokenWidth - 18}px`,
                      width: "36px",
                      zIndex: 3001,
                    }}
                    id={layer.lId}
                  />
                </Draggable>
                <Draggable
                  onStart={this.startTurn}
                  onDrag={this.dragTurn}
                  onStop={this.stopTurn}
                >
                  <img
                    src="https://ipfs.io/ipfs/QmdaJCC9ZxzfR8pnWA45BXhXVM8QQvi1UitUHzXaV1pbSn"
                    alt=""
                    style={{
                      position: "absolute",
                      top: `${(600 - tokenHeight) / 2 - 18}px`,
                      left: `${-18}px`,
                      width: "36px",
                      zIndex: 3001,
                    }}
                    id={layer.lId}
                  />
                </Draggable>

                <div
                  style={{
                    position: "absolute",
                    top: `${(600 - tokenHeight) / 2 +
                      (tokenHeight / 5) * 4 +
                      2}px`,
                    left: `${54}px`,
                    height: "32px",
                    width: `${tokenWidth - 108}px`,
                    background: "rgba(255, 255, 244, 0.3)",
                    borderRadius: "18px",
                    zIndex: 3001,
                  }}
                ></div>
                <Draggable
                  axis="x"
                  grid={[
                    (tokenWidth - 108 - 36) / 20,
                    (tokenWidth - 108 - 36) / 20,
                  ]}
                  bounds={{ left: (tokenWidth - 108 - 36) * -1, right: 0 }}
                  onStart={this.startAlpha}
                  onDrag={this.dragAlpha}
                  onStop={this.stopAlpha}
                >
                  <img
                    src="https://ipfs.io/ipfs/QmVZPQQScPTxYWezSoWBqSPrzrv9YwnJxabR2RK2ZBASbi"
                    alt={(tokenWidth - 108 - 36) * -1}
                    name={(tokenWidth - 108 - 36) * -1}
                    id={(tokenWidth - 108 - 36) * -1}
                    value={(tokenWidth - 108 - 36) * -1}
                    style={{
                      position: "absolute",
                      top: `${(600 - tokenHeight) / 2 +
                        (tokenHeight / 5) * 4}px`,
                      left: `${tokenWidth - 90}px`,
                      width: "36px",
                      zIndex: 3001,
                    }}
                  />
                </Draggable>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newImla: state.userState.newImla,
  layers: state.userState.newImla.iData.layers,
  format: state.userState.newImla.iData.format,
});

export default connect(mapStateToProps, { setAlpha, setMove })(Display);
