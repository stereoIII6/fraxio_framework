import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, InputGroup, Input } from "reactstrap";
import { onCreateNow, onOrderNow } from "./action/userActions";

import YoutubeEmbed from "./YoutubeEmbed";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
class Home extends Component {
  static propTypes = {
    onCreateNow: PropTypes.func,
    onOrderNow: PropTypes.func,
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
  orderNow = (e) => {
    // console.log("push");
    e.preventDefault();
    this.props.onOrderNow();
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
          <Button
            id="screenBtn"
            onClick={this.orderNow}
            style={{ marginLeft: "1em", background: "mediumseagreen" }}
          >
            ORDER A TOKEN
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
          <p style={{ fontFamily: "comfortaa" }}>
            What is the fractio framework? <br></br>Fractio is the first creator
            facing Non-Fungible Token [NFT] editor that enables user to connect
            their NFT’s creations to oracles and use that information to create
            new, fun, and innovative works of art. All this is possible without
            ever having to code a single line.
          </p>
          <YoutubeEmbed embedId={this.state.url} />
        </div>
        <div
          id="form"
          style={{
            paddingBottom: "100px",
          }}
        >
          <Newsletter />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { onCreateNow, onOrderNow })(Home);
