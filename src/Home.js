import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, InputGroup, Input } from "reactstrap";
import { onCreateNow } from "./action/userActions";
import AsyncSpring from "./AsyncSpring";
import YoutubeEmbed from "./YoutubeEmbed";
class Home extends Component {
  static propTypes = {
    onCreateNow: PropTypes.func,
  };
  state = {
    headLine: "The Toolkit for Digital Creators",
    more:
      "Connect real world data and digital assets without the need for code",
    nl_email: "",
    nft: true,
    url: "ZDU0Yz1EG3M",
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
  changeNL = (e) => {
    this.setState({ nft: !this.state.nft });
  };
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
            style={{ marginBottom: "2em" }}
          />

          <YoutubeEmbed embedId={this.state.url} />
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
                  width: "15%",
                  float: "left",
                }}
                value={this.state.nft}
                onChange={this.changeNL}
              >
                <option name="nft" value={true} id="nft">
                  NFT
                </option>
                <option name="email" value={false} id="email">
                  EMAIL
                </option>
              </Input>
              <Input
                type="email"
                id="nlEmail"
                value={this.state.nl_email}
                placeholder={
                  this.state.nft
                    ? "Enter Your Wallet Address"
                    : "Enter Your Email"
                }
                onChange={this.onNewsLetter}
                style={{
                  fontSize: "2em",
                  fontFamily: "comfortaa",
                  width: "55%",
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
