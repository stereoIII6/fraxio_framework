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
class Newsletter extends Component {
  state = {
    nft: "no",
    nl_email: "",
    sent: false,
  };
  sendEmail(e) {
    e.preventDefault();
    console.log(
      e.target,
      process.env.REACT_APP_USER_ID,
      process.env.REACT_APP_NL_TEMPLATE_ID,
      process.env.REACT_APP_SERVICE_ID
    );

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_NL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(this.setState({ sent: true })); /* **/
  }
  onNewsLetter = (e) => {
    this.setState({ nl_email: e.target.value });
  };

  changeNL = (e) => {
    this.setState({ nft: !this.state.nft });
  };
  render() {
    return (
      <div className="container">
        {!this.state.sent ? (
          <Form onSubmit={this.sendEmail}>
            <InputGroup
              style={{
                width: "60%",
                marginTop: "5em",
                marginLeft: "20%",
                marginBottom: "100px",
              }}
            >
              <Input
                type="select"
                id="valid"
                name="valid"
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
                type="text"
                id="userMail"
                name="userMail"
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
              <Input
                type="submit"
                onClick={this.nlPush}
                style={{
                  fontSize: "2em",
                  fontFamily: "comfortaa",
                  float: "left",
                  width: "20%",
                }}
                value="News"
              />
            </InputGroup>
          </Form>
        ) : (
          <h3>{`${this.state.nl_email}`}</h3>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Newsletter);