import React, { Component } from "react";
import { Button, InputGroup, Input, Form, CustomInput } from "reactstrap";
class SportcardPreset extends Component {
  state = {
    name: "",
    symbol: "",
    desc: "",
    creator: null,
    name: "",
    symbol: "",
    description: "",
    format: {},
  };
  render() {
    return (
      <div>
        <Form>
          <h2>Creator : 0x0</h2>
          <InputGroup>
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              placeholder="Token Name"
            />
            <Input
              type="text"
              name="symbol"
              id="symbol"
              value={this.state.symbol}
              placeholder="Token Symbol"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="textfield"
              name="description"
              id="description"
              value={this.state.description}
              placeholder="Description"
            />
          </InputGroup>
          <InputGroup>
            <Button value={} name="format" id="format">
              Insta Story
            </Button>
            <Button value={} name="format" id="format">
              Pinterest
            </Button>
            <Button value={} name="format" id="format">
              Facebook Post
            </Button>
            <Button value={} name="format" id="format">
              Twitter Post
            </Button>
            <Button value={} name="format" id="format">
              A4 Landscape
            </Button>
            <Button value={} name="format" id="format">
              A4 Portrait
            </Button>
            <Button value={} name="format" id="format">
              HD Screen
            </Button>
            <Button value={} name="format" id="format">
              16:9 Screen
            </Button>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default SportcardPreset;
