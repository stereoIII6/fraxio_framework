import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, InputGroup, Input } from "reactstrap";
import { onCreateNow } from "./action/userActions";
import AsyncSpring from "./AsyncSpring";
class Home extends Component {
  static propTypes = {
    onCreateNow: PropTypes.func,
  };
  state = {
    headLine: "The Toolkit for Digital Creators",
    more:
      "Connect real world data and digital assets without the need for code",
    nl_email: "",
  };
  moreNow = (e) => {
    // console.log("more");
    e.preventDefault();
  };
  createNow = (e) => {
    // console.log("push");
    e.preventDefault();
    this.props.onCreateNow();
  };
  onNewsLetter = (e) => {
    this.setState({ nl_email: e.target.value });
  };
  nlPush = (e) => {};
  render() {
    const { headLine, more } = this.state;
    return (
      <div>
        <div id="slogan">{headLine}</div>
        <div id="oneliner">{more}</div>
        <div id="scr">
          <Button id="screenBtn" onClick={this.createNow}>
            CREATE NOW
          </Button>
        </div>

        <div id="tween">
          <img
            id="more"
            src="https://ipfs.io/ipfs/QmUZwzXZRYToP8PvN7r39aAKpMYBQZPfDkM8FyHBJ7r3Rs"
            alt=""
            onClick={this.moreNow}
          />
          <AsyncSpring />
        </div>
        <div id="form">
          <Form>
            <InputGroup
              style={{ width: "60%", marginTop: "5em", marginLeft: "20%" }}
            >
              <Input
                type="select"
                id="valid"
                style={{
                  fontSize: "2em",

                  width: "5%",
                  float: "left",
                }}
              >
                <option name="nft" value="nft" id="nft">
                  NFT
                </option>
                <option name="email" value="email" id="email">
                  EMAIL
                </option>
              </Input>
              <Input
                type="email"
                id="nlEmail"
                value={this.state.nl_email}
                placeholder="Enter Your Email"
                onChange={this.onNewsLetter}
                style={{
                  fontSize: "2em",
                  fontFamily: "comfortaa",
                  width: "65%",
                  float: "left",
                }}
              />
              <Button
                onClick={this.nlPush}
                style={{
                  fontSize: "2em",
                  fontFamily: "comfortaa",
                  float: "left",
                  width: "20%",
                }}
              >
                News
              </Button>
            </InputGroup>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { onCreateNow })(Home);
