import React, { Component } from "react";
import { Input, InputGroup, Form, FormGroup, Alert, Button } from "reactstrap";
import ArtBoard from "./ArtBoard";
import ArtPreset from "./ArtPreset";
import Collectibles from "./Collectibles";
class EditSel extends Component {
  state = {
    sel: true,
    new: false,
    uploader: false,
    art: false,
    collectibles: false,
  };
  onClickBtn = (e) => {
    e.preventDefault();
    if (e.target.name === "new") this.setState({ sel: false, new: true });
    if (e.target.name === "uploader")
      this.setState({ sel: false, uploader: true });
    if (e.target.name === "art") this.setState({ sel: false, art: true });
    if (e.target.name === "collectibles")
      this.setState({ sel: false, collectibles: true });
  };
  render() {
    return (
      <div className="container">
        {this.state.sel ? (
          <div>
            <div className="row" style={{ height: "130px" }}>
              <div className="col m-0 p-0">
                <Button id="bigBtn" name="new" onClick={this.onClickBtn}>
                  New Asset
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button
                  id="bigBtn"
                  name="uploader"
                  onClick={this.onClickBtn}
                  disabled
                >
                  Load Asset
                </Button>
              </div>
            </div>
            <div className="row" style={{ height: "230px" }}>
              <div className="col m-0 p-0">
                <Button id="bigBtnDone" onClick={this.onClickBtn} name="art">
                  Digital Art
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  Music Album
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button
                  id="bigBtnDone"
                  onClick={this.onClickBtn}
                  name="collectibles"
                  disabled
                >
                  Collectibles
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  Event Ticket
                </Button>
              </div>
            </div>
            <div className="row" style={{ height: "230px" }}>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  Bonus Card
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  E Book
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  Product Display
                </Button>
              </div>
              <div className="col m-0 p-0">
                <Button id="bigBtn" onClick={this.onClickBtn} disabled>
                  Collectibles
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.new ? <ArtBoard /> : null}
        {this.state.uploader ? <div>Upload Your Token File</div> : null}
        {this.state.art ? <ArtPreset /> : null}
        {this.state.collectibles ? <Collectibles /> : null}
        <div style={{ height: "180px" }}></div>
      </div>
    );
  }
}
export default EditSel;
