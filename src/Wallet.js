import React, { Component } from "react";
import { connect } from "react-redux";
import Web3 from "web3";
import PropTypes from "prop-types";
import { getNFTList } from "./action/userActions";
import { Input, InputGroup, Form, FormGroup, Alert } from "reactstrap";
import PYE from "./abis/PYE.json";
import MLQ from "./abis/MLQ.json";
import Preview from "./Preview";
const RinkMLQAddress = "0x6c9939ded06fb2C6FbdAE377225219faC8623132";
const RinkPYEAddress = "0xAE0251abB8502522B8b98EdcA19Cd689651560f6";

class Wallet extends Component {
  state = {
    NFT: null,
    NFTID: 0,
    FRXNAME: "",
    FRXSYM: "",
    ERCPEG: 0xc28e24cddb16b729a25baa21e9d670033897ba1f,
    FRXSUPPLY: 0,
    PEGPRICE: 0,
    pyes: [],
  };

  static propTypes = {
    user: PropTypes.object,
    getNFTList: PropTypes.func,
  };

  async componentDidMount() {
    await this.loadWeb3();
    await this.getLocalTokens();

    /* const userTXList = `https://api-rinkeby.etherscan.io/api?module=account&action=tokennfttx&address=${hardADR}&startblock=0&endblock=999999999&sort=asc&apikey=G6QIM7PASIXPRDRV7KJVWQV196FU6T4KKT`;
    const ERC721s = fetch(userTXList)
      .then((response) => response.json())
      .then((data) => {
        const dataMin = data.result;
        console.log(dataMin);
        this.setState({ erc721TXs: dataMin });
        this.props.getNFTList(dataMin);
      });
    console.log(ERC721s);
    /** */
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      console.log("ethereum", window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3", window.web3);
    } else window.alert("Use a Metamask");
  }
  async getLocalTokens() {
    // console.log(PYE);
    const web3 = window.web3;

    const pye = new web3.eth.Contract(PYE.abi, RinkPYEAddress);
    const hardADR = this.props.user.adr;

    const myArt = await pye.methods.balanceOf(hardADR).call({ from: hardADR });
    if (myArt > 0) {
      let pyes = [];
      for (let i = 0; i < myArt; i++) {
        pyes[i] = await pye.methods
          .getTokenById(hardADR, i)
          .call({ from: hardADR });
        // console.log(i, pyes[i]);
      }
      this.setState({ pyes: pyes });
      // console.log("pye scan // ", pyes);
    }
  }
  render() {
    return (
      <div>
        {
          // Render Users Tokens

          <Alert
            style={{
              width: "100%",
              height: "520px",
              overflow: "hidden",
              background: "ivory",
            }}
          >
            {
              // console.log(this.state.erc721TXs)
              <div
                id="slideshow"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  id="slider"
                  style={{
                    position: "relative",
                    top: "0",
                    left: "0",
                    width:
                      "auto" /* `${this.state.erc721TXs.length * 120}px` */,
                    height: "500px",
                  }}
                >
                  {this.state.pyes.map((pye) => (
                    <div
                      key={pye}
                      style={{
                        width: `${JSON.parse(pye).format.formatX / 4}px`,
                        height: `${JSON.parse(pye).format.formatY / 4}px`,
                        overflow: "hidden",
                        marginRight: "10px",
                        marginBottom: "10px",
                        float: "left",
                        background: "lightgrey",
                        padding: "0px",
                        lineBreak: "anywhere",
                        fontSize: "0.3em",
                      }}
                    >
                      <Preview
                        pye={pye}
                        key={pye.id}
                        style={{
                          position: "absolute",
                        }}
                      />
                      {`${pye.id} | ${pye.name} [${pye.symbol}]`}
                    </div>
                  ))}
                </div>
              </div>
            }
          </Alert>

          // Info Form

          // FRX Name
          // FRX Symbol
          // Auto Token Import
          // FRX Amount
          // FRX Price
          // Distribution Options
          // Airdropping > 10
          // Pooling >1000
          // Product Sale unlmtd
          // Order Booking // around 50-200
          // Auctioning // 1 - 10
          // Device or IdVerification
          // Approve

          // Submit
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});
export default connect(mapStateToProps, { getNFTList })(Wallet);
