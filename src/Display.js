import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Display extends Component {
  static propTypes = {
    format: PropTypes.object,
    newImla: PropTypes.object,
    layers: PropTypes.array,
  };
  state = {
    scaleValX: 0,
    scaleValY: 0,
    scaleDiff: 0,
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
  startScale = (e) => {
    console.log(e.pageX);
    this.setState({ scaleValX: e.pageX, scaleValY: e.pageY });
  };
  doScale = (e) => {
    console.log(e.pageX, e.pageY);
  };
  stopScale = (e) => {
    console.log(e.target.id);
  };
  startMove = (e) => {
    console.log(e.target.id);
  };
  stopMove = (e) => {
    console.log(e.target.id);
  };
  startTurn = (e) => {
    console.log(e.target.id);
  };
  stopTurn = (e) => {
    console.log(e.target.id);
  };
  startAlpha = (e) => {
    console.log(e.target.id);
  };
  stopAlpha = (e) => {
    console.log(e.target.id);
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
            id={layer.lId}
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
              opacity:
                layer.keys[this.props.newImla.activeK].a /
                  this.props.newImla.activeL ===
                null
                  ? 100
                  : 200,
            }}
          >
            <img
              src={layer.lData.url}
              alt=""
              style={{ width: "100%", height: "auto" }}
              key={layer.lId}
            />
            {this.props.newImla.activeL === layer.lId ? (
              <div>
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
                  onClick={this.startScale}
                  onMouseDown={this.doScale}
                  onMouseUp={this.stopScale}
                />
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
                  onMouseDown={this.startTurn}
                  onMouseUp={this.stopTurn}
                />
                <img
                  src="https://ipfs.io/ipfs/QmYwpVyvse8ErpEzUcdQNukWdwHowkk2ZoUHwx3LrdnjWB"
                  alt=""
                  style={{
                    position: "absolute",
                    top: `${(600 - tokenHeight) / 2 + tokenHeight / 2 - 18}px`,
                    left: `${tokenWidth / 2 - 18}px`,
                    width: "36px",
                    zIndex: 3001,
                  }}
                  onMouseDown={this.startMove}
                  onMouseUp={this.stopMove}
                />
                <div
                  style={{
                    position: "absolute",
                    top: `${(600 - tokenHeight) / 2 + (tokenHeight / 5) * 4}px`,
                    left: `${54}px`,
                    height: "36px",
                    width: `${tokenWidth - 108}px`,
                    background: "rgba(255, 255, 244, 0.3)",
                    borderRadius: "18px",
                    zIndex: 3001,
                  }}
                ></div>
                <img
                  src="https://ipfs.io/ipfs/QmVZPQQScPTxYWezSoWBqSPrzrv9YwnJxabR2RK2ZBASbi"
                  alt=""
                  style={{
                    position: "absolute",
                    top: `${(600 - tokenHeight) / 2 + (tokenHeight / 5) * 4}px`,
                    left: `${tokenWidth - 90}px`,
                    width: "36px",
                    zIndex: 3001,
                  }}
                  onMouseDown={this.startAlpha}
                  onMouseUp={this.stopAlpha}
                />{" "}
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

export default connect(mapStateToProps, {})(Display);
