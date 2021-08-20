import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onGoWallet } from "./action/userActions";
import Blockies from "react-blockies";

const fresh = "#9fe6c3";
const sky = "#aad9d8";
const purple = "#9f95c3";
const grey = "#e2e3db";
const blue = "#7c9cb6";

class Defi extends Component {
  static propTypes = {
    user: PropTypes.object,
    onGoWallet: PropTypes.func,
  };
  state = {
    users: null,
  };
  onClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === "wallet") this.props.onGoWallet();
  };

  render() {
    const user = String(this.props.user.adr);
    const short =
      "0x" +
      user.charAt(2) +
      user.charAt(3) +
      user.charAt(4) +
      "..." +
      user.charAt(40) +
      user.charAt(41);
    console.log(short);
    const mlqBalance = this.props.user.mlq;
    return (
      <div style={{ float: "right", width: "600px", marginTop: "15px" }}>
        <div className="col">
          <div
            className="btn p-2"
            onClick={this.onClick}
            style={{
              background: blue,
              color: fresh,
              borderRadius: "9px",
              float: "right",
              marginRight: "20px",
              fontWeight: 100,
            }}
            id="accmenu_lnk"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div
            className="btn p-2 mr-1"
            onClick={this.onClick}
            style={{
              background: sky,
              color: blue,
              borderRadius: "9px",
              float: "right",
              fontWeight: 100,
            }}
            id="wallet_lnk"
          >
            {`${mlqBalance / 10 ** 18} MLQ`}
          </div>
          <div
            className="btn p-2 mr-1"
            onClick={this.onClick}
            style={{
              background: grey,
              color: purple,
              borderRadius: "9px",
              float: "right",
              fontWeight: 100,
            }}
            id="settings_lnk"
          >
            {this.props.user.net}
          </div>
          <div
            className="btn p-2 mr-1"
            onClick={this.onClick}
            id="wallet"
            style={{
              color: fresh,
              background: purple,
              fontWeight: 100,
              borderRadius: "9px",
              width: "150px",
              float: "right",
            }}
          >
            <Blockies
              seed={user}
              color="#dfe"
              bgcolor="#a71"
              size={6}
              scale={3}
              spotcolor="#000"
            />
            {" " + short}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.userState.user,
});
export default connect(mapStateToProps, { onGoWallet })(Defi);
