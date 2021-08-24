import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import emailjs from "emailjs-com";
import { Button, Form, InputGroup, Input } from "reactstrap";
import { init } from "emailjs-com";
const path = require("path");
require("dotenv").config();
console.log(process.env.REACT_APP_USER_ID);
init(process.env.REACT_APP_USER_ID);
class Order extends Component {
  state = {
    tMail: "",
    tType: "no",
    tName: "",
    tSym: "",
    tDesc: "",
    sent: false,
  };
  sendEmail(e) {
    e.preventDefault();
    console.log(
      e.target,
      process.env.REACT_APP_USER_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      process.env.REACT_APP_SERVICE_ID
    );

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            tMail: "",
            tType: "no",
            tName: "",
            tSym: "",
            tDesc: "",
            sent: true,
          });
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
  onSymbol = (e) => {
    this.setState({ tSym: e.target.value });
  };
  onDesc = (e) => {
    this.setState({ tDesc: e.target.value });
  };
  onMail = (e) => {
    this.setState({ tMail: e.target.value });
  };
  render() {
    return (
      <div className="container" style={{ overflowY: "scroll" }}>
        <h1
          style={{
            color: "mediumseagreen",
            fontSize: "2em",
            marginTop: "1em",
            fontFamily: "comfortaa",
          }}
        >
          {!this.state.sent
            ? "Order a custom Asset &amp; we will create It for you."
            : "Your request was sent ! "}
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
            id="orderSelect"
            name="orderSelect"
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
              name="tokenName"
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
                id="orderSymbol"
                name="orderSymbol"
                onChange={this.onSymbol}
                required
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
            id="message"
            name="message"
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
            required
          />
          <label style={{ fontSize: "2em" }}>Describe your Idea</label>
          <Input
            type="text"
            id="userMail"
            name="userMail"
            value={this.state.tMail}
            onChange={this.onMail}
            placeholder="Enter Your Email Address"
            required
            style={{
              fontSize: "2em",
              marginTop: "1em",
              fontFamily: "comfortaa",
              padding: "1em",
              background: "lightgrey",
              color: "mediumseagreen",
            }}
          />
          <Input type="submit" value="Order a Token Now !" />
        </Form>
        <div style={{ height: "180px" }}></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Order);