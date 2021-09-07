import React, { Component } from "react";
import { Button, InputGroup, Input } from "reactstrap";

class Format extends Component {
  state = {
    customW: 0,
    customH: 0,
    format: {
      name: this.props.format.name,
      w: this.props.format.w,
      h: this.props.format.h,
    },
  };
  onFormat = (e) => {
    e.preventDefault();
    console.log(JSON.parse(e.target.id));
    this.setState({ format: JSON.parse(e.target.id) });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    if (e.target.name === "customW") console.log(e.target.name);
    this.setState({
      format: {
        name: "custom",
        w: e.target.value,
        h: this.state.customH,
      },
    });
    if (e.target.name === "customW") console.log(e.target.name);
    this.setState({
      format: {
        name: "custom",
        w: this.state.customW,
        h: e.target.value,
      },
    });
  };
  onSaveFormat = (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    this.props.doFoggleInMod(e.target.id);
  };
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", fontSize: "0.4em" }}>
          <label>use a preset format</label>
        </div>
        <InputGroup>
          <Button
            name="insta"
            id={JSON.stringify({ name: "insta", w: "1080", h: "1080" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "insta" ? 1 : 0.77,
              background:
                this.state.format.name === "insta" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./instagram.png"
              alt=""
              style={{ width: "40px" }}
              name="insta"
              id={JSON.stringify({ name: "insta", w: "1080", h: "1080" })}
            />
          </Button>
          <Button
            name="pinterest"
            id={JSON.stringify({ name: "pinterest", w: "735", h: "1102" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "pinterest" ? 1 : 0.77,
              background:
                this.state.format.name === "pinterest" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./pinterest.png"
              alt=""
              style={{ width: "40px" }}
              name="pinterest"
              id={JSON.stringify({ name: "pinterest", w: "735", h: "1102" })}
            />
          </Button>
          <Button
            name="facebook"
            id={JSON.stringify({ name: "facebook", w: "640", h: "511" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "facebook" ? 1 : 0.77,
              background:
                this.state.format.name === "facebook" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./facebook.png"
              alt=""
              style={{ width: "40px" }}
              name="facebook"
              id={JSON.stringify({ name: "facebook", w: "640", h: "511" })}
            />
          </Button>
          <Button
            name="twitter"
            id={JSON.stringify({ name: "twitter", w: "1125", h: "632" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "twitter" ? 1 : 0.77,
              background:
                this.state.format.name === "twitter" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./twitter.png"
              alt=""
              style={{ width: "40px" }}
              name="twitter"
              id={JSON.stringify({ name: "twitter", w: "1125", h: "632" })}
            />
          </Button>
        </InputGroup>
        <InputGroup>
          <Button
            name="a4l"
            id={JSON.stringify({ name: "a4l", w: "2480", h: "3508" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "a4l" ? 1 : 0.77,
              background:
                this.state.format.name === "a4l" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./a4l.png"
              alt=""
              style={{ width: "40px" }}
              name="a4l"
              id={JSON.stringify({ name: "a4l", w: "2480", h: "3508" })}
            />
          </Button>
          <Button
            name="a4p"
            id={JSON.stringify({ name: "a4p", w: "3508", h: "2480" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "a4p" ? 1 : 0.77,
              background:
                this.state.format.name === "a4p" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./a4p.png"
              alt=""
              style={{ width: "40px" }}
              name="a4p"
              id={JSON.stringify({ name: "a4p", w: "3508", h: "2480" })}
            />
          </Button>
          <Button
            name="hd"
            id={JSON.stringify({ name: "hd", w: "1920", h: "1080" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "hd" ? 1 : 0.77,
              background: this.state.format.name === "hd" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./hd.png"
              alt=""
              style={{ width: "40px" }}
              name="hd"
              id={JSON.stringify({ name: "hd", w: "1920", h: "1080" })}
            />
          </Button>
          <Button
            name="ws"
            id={JSON.stringify({ name: "ws", w: "1280", h: "720" })}
            className="col"
            onClick={this.onFormat}
            style={{
              opacity: this.state.format.name === "ws" ? 1 : 0.77,
              background: this.state.format.name === "ws" ? "#3dc3c8" : "white",
              border: "none",
            }}
          >
            <img
              src="./ws.png"
              alt=""
              style={{ width: "40px" }}
              name="ws"
              id={JSON.stringify({ name: "ws", w: "1280", h: "720" })}
            />
          </Button>
        </InputGroup>
        <div style={{ textAlign: "center", fontSize: "0.4em" }}>
          <Button
            onClick={this.onSaveFormat}
            id={JSON.stringify(this.state.format)}
          >
            Set Preset Format
          </Button>
          <br />
          <label>or set a custom format</label>
        </div>
        <InputGroup style={{ padding: " 0 30% 0 30%" }}>
          <Input
            type="number"
            value={this.state.customW}
            name="customW"
            id={JSON.stringify({
              name: "custom",
              w: this.state.customW,
              h: this.state.customH,
            })}
            onChange={this.onChange}
          />
          <Input
            type="number"
            value={this.state.customH}
            name="customH"
            id={JSON.stringify({
              name: "custom",
              w: this.state.customW,
              h: this.state.customH,
            })}
            onChange={this.onChange}
          />
        </InputGroup>
        <div
          style={{
            padding: " 0 30% 0 30%",
            textAlign: "center",
            fontSize: "0.4em",
          }}
        >
          <label> width | height</label>
          <br />
          <Button
            id={JSON.stringify(this.state.format)}
            onClick={this.onSaveFormat}
          >
            Set Custom Format
          </Button>
        </div>
      </div>
    );
  }
}

export default Format;
