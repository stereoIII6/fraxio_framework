import React, { Component } from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="row" style={{ height: "300px" }}>
        <div className="col"></div>
        <div className="col" style={{ textAlign: "center" }}>
          <a href="https://discord.gg/pbUbhTCtuw" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmSJYwnpALSEK5WmmtQSMWmGiMfrHJNj92oLpWKXtQk6HA"
              alt="discord"
              style={{ width: "32px" }}
            ></img>
          </a>
          <a href="https://www.instagram.com/fractio.xyz/" target="_blank">
            <img
              alt="twitter"
              src="https://ipfs.io/ipfs/QmWhFHjJmAJLnyQj58UhhfMCeVWw7WchvHSodbPqMPL4Mn"
              style={{ width: "32px" }}
            ></img>
          </a>
          <a href="https://twitter.com/Fractioxyz" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmYq46HAjbTNosVSfLALxcKdaHfNL1GkNm287PNdMDUKhG"
              alt="insta"
              style={{ width: "32px" }}
            ></img>
          </a>
        </div>
        <div className="col">
          <a onClick={this.goFAQs}>FAQs</a>
          <br />
          <a onClick={this.goFAQs}>Contact</a>
          <br />
          <a onClick={this.goFAQs}>Imprint</a>
          <br />
          <a onClick={this.goFAQs}>Terms &amp; Conditions</a>
        </div>
      </div>
    );
  }
}

export default Footer;
