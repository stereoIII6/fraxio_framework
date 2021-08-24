import React, { Component } from "react";
import { Input, InputGroup, Form, FormGroup, Alert, Button } from "reactstrap";
class Collectibles extends Component {
  state = {
    tCount: 0,
    layers: [],
    name: "",
    group: "default", // default / bg / trait / fg / c1 / c2
    size: "default", // 1 / 2 / 4 / 9 / 16 / 25 / 255(colors)
    fx: "default",
    files: [],
  };
  newTrait = (e) => {
    e.preventDefault();
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Form>
          <InputGroup>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Layer Name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Input
              id="group"
              name="group"
              type="select"
              value={this.state.group}
              onChange={this.onChange}
            >
              <option value="default">---</option>
              <option value="bg">Background</option>
              <option value="trait">Trait</option>
              <option value="fg">Foreground</option>
              <option value="c1">Custom 1</option>
              <option value="c2">Custom 2</option>
            </Input>
            <Input
              id="size"
              name="size"
              type="select"
              value={this.state.size}
              onChange={this.onChange}
            >
              <option value="default">---</option>
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={9}>9</option>
              <option value={16}>16</option>
              <option value={25}>25</option>
              <option value={99}>99</option>
              <option value={255}>255</option>
            </Input>
          </InputGroup>
          <div className="row">
            <label className="col">Enter Layer Name</label>
            <label className="col">
              Choose Layer Group <Button id="help">?</Button>
            </label>
            <label className="col">
              Choose Layer Stack Size <Button id="help">?</Button>
            </label>
          </div>
        </Form>
        {this.state.groupFX ? (
          <Form>
            {" "}
            <InputGroup>
              <Input
                id="fx"
                type="select"
                value={this.state.fx}
                onChange={this.onChange}
              >
                <option value="default">---</option>
                <option value="mouse">Mouse FX</option>
                <option value="oracle">Oracle FX</option>
                <option value="stats">Stats FX</option>
              </Input>
              {this.state.fx === "mouse" ? (
                <Input
                  id="mouse"
                  type="select"
                  value={this.state.fx}
                  onChange={this.onChange}
                >
                  <option value="default">---</option>
                  <option value="mouse">Paralax Strong</option>
                  <option value="oracle">Paralax Medium</option>
                  <option value="stats">Paralax Soft</option>
                </Input>
              ) : null}
              {this.state.fx === "oracle" ? (
                <Input
                  id="oracle"
                  type="select"
                  value={this.state.fx}
                  onChange={this.onChange}
                >
                  <option value="default">---</option>
                  <option value="mouse">ETH</option>
                  <option value="oracle">Link</option>
                  <option value="stats">Dai</option>
                </Input>
              ) : null}
              {this.state.fx === "stats" ? (
                <Input
                  id="stats"
                  type="select"
                  value={this.state.fx}
                  onChange={this.onChange}
                >
                  <option value="default">---</option>
                  <option value="mouse">Likes</option>
                  <option value="oracle">Views</option>
                  <option value="stats">Sales</option>
                </Input>
              ) : null}
            </InputGroup>
          </Form>
        ) : null}
      </div>
    );
  }
}

export default Collectibles;
