import React, { Component } from "react";
import Slideshow from "./SlideShow";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./styles.css";
import { getUsers, setScreenMode } from "../../action/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const fresh = "#9fe6c3";
const sky = "#aad9d8";
const purple = "#9f95c3";
const grey = "#e2e3db";
const blue = "#7c9cb6";
const dgrey = "#888888";

class Landing extends Component {
  static propTypes = {
    getUsers: PropTypes.func,
    setScreenMode: PropTypes.func,
    screenMode: PropTypes.string,
    users: PropTypes.array,
    net: PropTypes.string,
    bal: PropTypes.string,
  };
  state = {
    modal: false,
    url: "V0XJyczU_7M",
    screenMode: "about",
  };
  toggle = (e) => {
    this.setState({ modal: !this.state.modal });
  };
  onClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({ screenMode: e.target.id });
    this.props.setScreenMode(e.target.id);
  };

  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state) => ({
  screenMode: state.userState.screenMode,
  users: state.userState.users,
  net: state.userState.net,
  bal: state.userState.bal,
});
export default connect(mapStateToProps, { getUsers, setScreenMode })(Landing);
