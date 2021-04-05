import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroup, Form } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Provider } from "react-redux";
import store from "./store";
import Screen from './Screen';
import Coming from './Coming';
import { getLayers } from "./action/layerActions.js";


const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
// const ipfs = IpfsHttpClient('localhost', '5001', { protocol: 'http' });
// console.log(ipfs);

class App extends Component {

  componentDidMount() {
    store.dispatch(getLayers());
  }

  state = {
    imageURL: null,
    buffer: null,
    check: "orange",
    urlList: []
  }

  captureFile = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) })
    }

  }
  submitFile = (e) => {
    e.preventDefault();
    // console.log("file submitted");
    // console.log(this.state.buffer);

    if (this.state.buffer) {
      ipfs.add(this.state.buffer).then((result, err) => {

        console.log('Ipfs Result', result);

        if (err) {
          // console.error(err);
          return
        }
        this.setState({ imageURL: result.path, check: "orange", urlList: [...this.state.urlList, result.path] })
        // console.log(this.state.imageURL);
      });

    }
  }

  copy = (e) => {
    e.preventDefault();
    console.log("copied");
    this.setState({ check: "mediumseagreen" })
  }

  fixLayer = (e) => {
    e.preventDefault();
    console.log("layercount ", this.state.layers.length);
    if (this.state.layers.length === 0) {
      console.log("empty");
      this.setState({
        layers: [
          {
            path: document.getElementById('path').value,
            key: this.state.layerCount,
            edit: null
          }
        ], layerCount: 1
      });
    }
    else {
      this.setState({
        layers: [
          ...this.state.layers, // SPREAD PREVIOUS LAYERS
          {
            path: document.getElementById('path').value,
            key: this.state.layerCount,
            edit: null
          }
        ], layerCount: this.state.layerCount + 1
      });
    }
    console.log(this.state.layerCount, this.state.layers)
  }
  animateLayer = (e) => {
    e.preventDefault();
  }
  setEdit = (e) => {
    e.preventDefault();
    console.log(this.state.layers[e.target.id]);
  }
  deleteLayer = (e) => {
    e.preventDefault();
    console.log(this.state.layers.length);
    if (this.state.layers.length === 1) {
      console.log("last one");
      this.setState({ layers: [], layerCount: 0 })
    }
    else {
      console.log("rearrange", e.target.id);
    }
  }

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <div className="container-fluid mt-5">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex text-center">
                  <div className="col-4" >

                    <h4>MEDIA UPLOAD</h4>

                    <Form onSubmit={this.submitFile}>
                      <InputGroup>
                        <Input type="file" onChange={this.captureFile} style={{ float: "left", width: "80%" }} />
                        <Button color="light" type="submit" style={{ float: "right" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-up-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
                          </svg>
                        </Button>
                      </InputGroup>
                    </Form>
                  </div>
                  {this.state.imageURL
                    ? <div className="col-4" >

                      <img src={`https://ipfs.io/ipfs/${this.state.imageURL}`} alt="upload" style={{ width: "220px" }} /> <br />
                      <div style={{ background: "#aa6633", borderRadius: "3px", marginTop: "2em", paddingLeft: "10px", color: "white" }}>
                        <a href={`https://ipfs.io/ipfs/${this.state.imageURL}`} style={{ color: "white", textDecoration: "none", fontSize: "0.5em", float: "left", margin: "1 0 0 1em" }}>{this.state.imageURL}</a> &nbsp; &nbsp;
                    <CopyToClipboard text={this.state.imageURL}>
                          <Button className="btn btn-sm" style={{ background: this.state.check, borderRadius: "3px", border: "0px", float: "right" }} onClick={this.copy}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                          </Button>
                        </CopyToClipboard></div>
                    </div>
                    : null}


                </main>
              </div>
            </div>
            <Screen />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
