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
    tWallet: "",
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
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h3
          style={{
            color: "mediumseagreen",
            fontSize: "2em",
            marginTop: "1em",
            fontFamily: "comfortaa",
          }}
        >
          {!this.state.sent
            ? "Order a custom Asset & we will create It for you. Tell us what your dynamic NFT is supposed to look like ?"
            : "Your request was sent ! "}
        </h3>
        <p></p>
        <Form className="contact-form" onSubmit={this.sendEmail}>
          <Input
            type="select"
            required
            value={this.state.tType}
            onChange={this.onChange}
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
              required
              value={this.state.tName}
              onChange={this.onChange}
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
                onChange={this.onChange}
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
                onChange={this.onChange}
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
            required
            value={this.state.tDesc}
            onChange={this.onChange}
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
            min={1500}
            max={9999}
            required
          />
          <label style={{ fontSize: "2em" }}>Describe your Idea</label>
          <Input
            type="email"
            id="userMail"
            name="userMail"
            value={this.state.tMail}
            onChange={this.onChange}
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
          <Input
            type="text"
            id="wallet"
            name="wallet"
            value={this.state.twallet}
            onChange={this.onChange}
            placeholder="Enter Your ETH Wallet Address"
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
          <Input
            type="submit"
            value="Describe your Idea and get your Token designed !"
            style={{
              fontSize: "2em",
              marginTop: "1em",
              fontFamily: "comfortaa",
              padding: "0 1em 0 1em",
              color: "lightgrey",
              background: "mediumseagreen",
            }}
          />
        </Form>
        <div style={{ height: "180px" }}></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Order);
