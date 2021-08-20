import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import emailjs from "emailjs-com";
import { Button, Form, InputGroup, Input } from "reactstrap";
require("dotenv").config();

class Order extends Component {
  state = {
    tType: "no",
    tName: "",
    tSym: "",
    tDesc: "",
  };
  sendEmail(e) {
    e.preventDefault();
    console.log(e.target);

    /*
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); /* **/
  }
  onType = (e) => {
    this.setState({ tType: e.target.value });
  };
  onName = (e) => {
    this.setState({ tName: e.target.value });
  };
  onDesc = (e) => {
    this.setState({ tDesc: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1
          style={{
            color: "mediumseagreen",
            fontSize: "2em",
            marginTop: "1em",
            fontFamily: "comfortaa",
          }}
        >
          Order a custom Asset &amp; we will create It for you.
        </h1>
        <Form className="contact-form" onSubmit={this.sendEmail}>
          <Input
            type="select"
            value={this.state.tType}
            onChange={this.onType}
            style={{
              background: "lightgrey",
              color: "mediumseagreen",
              fontSize: "2em",
              marginTop: "1em",
              fontFamily: "comfortaa",
            }}
          >
            <option id="no" name="no" value="no">
              ---
            </option>
            <option id="dynamicArt" name="dynamicArt" value="dynamicArt">
              Dynamic Art
            </option>
            <option id="dynamicBonus" name="dynamicBonus" value="dynamicBonus">
              Dynamic Bonus
            </option>
            <option
              id="dynamicMusicAlbum"
              name="dynamicMusicAlbum"
              value="dynamicMusicAlbum"
            >
              Dynamic Music Album
            </option>
            <option id="eventTicket" name="eventTicket" value="eventTicket">
              Event Ticket
            </option>
            <option id="collectibles" name="collectibles" value="collectibles">
              Collectibles
            </option>
            <option id="newsletter" name="newsletter" value="newsletter">
              NFT Newsletter
            </option>
            <option id="other" name="other" value="other">
              Other
            </option>
          </Input>
          <label style={{ fontSize: "2em" }}>
            Choose the Type of Token you are looking for ?
          </label>
          <InputGroup>
            <Input
              type="text"
              id="tokenName"
              value={this.state.tName}
              onChange={this.onName}
              placeholder="Token Title"
              style={{
                fontSize: "2em",
                marginTop: "1em",
                fontFamily: "comfortaa",
                padding: "1em",
                background: "lightgrey",
                color: "mediumseagreen",
              }}
            />
            {this.state.tType === "collectibles" ||
            this.state.tType === "newsletter" ||
            this.state.tType === "dynamicMusicAlbum" ? (
              <Input
                type="text"
                value={this.state.tSym}
                onChange={this.onSym}
                placeholder="Token Symbol"
                style={{
                  fontSize: "2em",
                  marginTop: "1em",
                  fontFamily: "comfortaa",
                  padding: "1em",
                  background: "lightgrey",
                  color: "mediumseagreen",
                  border: "1px solid mediumseagreen",
                }}
              />
            ) : null}
          </InputGroup>
          <label style={{ fontSize: "2em" }}>
            Enter a Token Name
            {this.state.tType === "collectibles" ||
            this.state.tType === "newsletter" ||
            this.state.tType === "dynamicMusicAlbum"
              ? " & Token Symbol"
              : null}
          </label>

          <Input
            type="textarea"
            value={this.state.tDesc}
            onChange={this.onDesc}
            placeholder="Your idea goes here ..."
            style={{
              fontSize: "2em",
              marginTop: "1em",
              fontFamily: "comfortaa",
              height: "200px",
              padding: "1em",
              background: "lightgrey",
              color: "mediumseagreen",
            }}
          />
          <label style={{ fontSize: "2em" }}>Describe your Idea</label>

          <Input type="submit" value="Order a Token Now !" />
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Order);
