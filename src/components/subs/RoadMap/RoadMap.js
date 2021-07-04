import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
class RoadMap extends Component {
  state = {
    welcome:
      "Welcome The Fractio framework enables users to create interactive digital assets that react to real time oracle data.With the arrival of the ERC – 721 token (NFT’s) standard. The door has been open for a wide range of uses, most still waiting to be discovered. We at fractio plan to be the pioneers of this space by offering our users innovative ways to utilize digital assets in both reality and the web3 space - more on this soon. Some of the more unique features will be the fractionalization of ERC – 721 tokens into other ERC –  20 tokens that can be traded, bought, displayed, and used for verification purposes. Another unique feature we have implemented at fractio.xyz is the ability to anchor ERC – 721 tokens to real world data. This allows us to use digital assets in a plethora of ways never seen before. Such as tokens demonstrating the current time and date or live changes based on season; A music album that automatically releases additional tracks when certain sales figures are reached; A digital trading card that always shows an athlete's up-to-date stats and reacts to recent wins or losses and so much more waiting to be discovered. All of this is possible without the need of ever writing a single line of code. We hope you follow us on our journey of discovery: ...",
    edutainment: "",
    works:
      "Fractio allows anyone to create dynamic art using the PYE Editor. The user can create multiple layers to build on. The user uploads the media via IPFS and edit the media adding the pre-coded oracle data that can trigger changes and reactions to any or all layers. The user can then Mint the layers and oracle feeds together into a singe non fungible asset called the PYE Token. If the owner decides, the owner may then fractionalize the PYE into multiple equal ERC20 (FRX Tokens).",
    use:
      "A step by step explanation When you access the fractio.xyz, you will see 3 main buttons, PYEditor, Fractionize and Swap. When you click on “PYEditor”, you will be directed to the PYE Editor. In the PYE Editor, you will be able to create digital artwork initially by uploading the media file via IPFS. You can also add multiple layers to this page. Once uploaded, you can edit and add the pre coded oracle data that can trigger changes to the layers. When you click Fractionize, you will be able to visualize all the NFT in the wallet. Once you select one of them to fractionize, you will be able to choose the Fractional Token Name, symbol, token supply, and have the option to self - mint, airdrop or auction. You can also set the token price either in MLQ, Eth or the other supported cryptocurrencies by approving the transaction.When you click Swap, you will be directed to the Swap page where you will be able to buy and sell the fractions of your artwork or the entire artwork itself.",
    tokens:
      "Using the native Editor on the Fractio platform, users can create non fungible, multilayer interactive digital assets called PYE Tokens. Real time oracle data feeds and verifiable randomness are easily integrated into the token so users are able to generate audio-visual assets that can react to or even trigger world events.",
    pye:
      "Using the native editor on the Fractio platform, users can create non fungible, multilayer, interactive digital assets called PYE tokens. Real time oracle data feeds and verifiable randomness are easily integrated into the token so users are able to generate audio visual assets that can react to real world data.",
    mlq:
      "The Milk Token is Fractio’s utility token, and is needed to utilize the layer editor to create and mint PYE tokens, buy and trade PYE Tokens, and fractionize PYE into FRX and participate in Liquidity pools.",
    frx:
      "The FRX tokens are fungible tokens that are tied to the non fungible value of a parent PYE token. If the creator decides to fractionize their parent PYE into 100 FRX tokens, each FRX will be representative of 1/100th of the parent PYE. The supply of specific FRX tokens is fixed as determined at the time the parent PYE is locked into the fractionizer contract. Each FRX asset class has its own contract address, token name(MyPYeTokenName) and Synbol[FRX_MPTN] and gets minted into the creators address PYE_alpha gets locked at a ratio of 1:1000 and returns 1000 FRX_alpha, each representing 1/1000th of PYE_alpha When the value of the parent PYE token changes, the value of the FRX token changes proportionally. Locking PYE to mint FRX requires MLQ tokens and network fees. Example Costs: 100 MLQ for locking and fractionizing PYE",
    mlqp:
      "Fractio will have multiple liquidity pools that support the ecosystem. In order to facilitate swapping between PYE, MLK and FRX tokens in a decentralized fashion, users may provide “Milquidity” to a pool(MLQP). MLQPs can be run as regular swapping pools or as bid auction pools and are entirely customizable. In order to facilitate the purchase of MLQ tokens, users may also provide liquidity in pairs of MLQ-Eth or MLQ-Dai. Users who lock their Milquidity pools will receive compensation in the form of Milq Shake Tokens (SHK).",
    shk:
      "Milk Shake Tokens (SHK) are the share token of the Fractio framework. They are earned by staking in the MLQP pools for a minimum of 1 up to 5 cycles. Holders of SHK will be eligible to receive a share of the revenues generated by Fractio. The MLQP tokens that are frozen in the stake contract are partly “deepfrozen” (not withdrawable until the end of the cycle) and “meltable”(withdrawable at any time). The same process also applies to the SHK tokens the user can claim from the revenue stream.",
  };
  onLink = (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    if (e.target.id === "welcome") {
      document.getElementById("headline").innerHTML = "Welcome";
      document.getElementById("content").innerHTML = this.state.welcome;
      document.getElementById("prev").innerHTML = "";
      document.getElementById("prev").style.opacity = 0;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("next").innerHTML = "Edutainment";
    }
    if (e.target.id === "edutainment") {
      document.getElementById("headline").innerHTML = "Fractio Edutainment";
      document.getElementById("content").innerHTML = this.state.edutainment;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "Welcome";
      document.getElementById("next").innerHTML = "How Fractio Works";
    }
    if (e.target.id === "works") {
      document.getElementById("headline").innerHTML = "How Fractio Works";
      document.getElementById("content").innerHTML = this.state.works;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "Edutainment";
      document.getElementById("next").innerHTML = "How to utilize Fractio";
    }
    if (e.target.id === "use") {
      document.getElementById("headline").innerHTML = "How to utilize Fractio";
      document.getElementById("content").innerHTML = this.state.use;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "How Fractio Works";
      document.getElementById("next").innerHTML = "Tokenomics";
    }
    if (e.target.id === "tokens") {
      document.getElementById("headline").innerHTML = "Tokenomics";
      document.getElementById("content").innerHTML = this.state.tokens;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "How to utilize Fractio";
      document.getElementById("next").innerHTML = "Milq Token [MLQ]";
    }
    if (e.target.id === "mlq") {
      document.getElementById("headline").innerHTML = "Milq Token [MLQ]";
      document.getElementById("content").innerHTML = this.state.mlq;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "Tokenomics";
      document.getElementById("next").innerHTML = "PYE Token [PYE]";
    }
    if (e.target.id === "pye") {
      document.getElementById("headline").innerHTML = "PYE Token [PYE]";
      document.getElementById("content").innerHTML = this.state.pye;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "Milq Token [MLQ]";
      document.getElementById("next").innerHTML = "FRX Token [FRX]";
    }
    if (e.target.id === "frx") {
      document.getElementById("headline").innerHTML = "FRX Token [FRX]";
      document.getElementById("content").innerHTML = this.state.frx;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "PYE Token [PYE]";
      document.getElementById("next").innerHTML = "Milquidity [MLQP]";
    }
    if (e.target.id === "mlqp") {
      document.getElementById("headline").innerHTML = "Milquidity [MLQP]";
      document.getElementById("content").innerHTML = this.state.mlqp;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 1;
      document.getElementById("prev").innerHTML = "FRX Token [FRX]";
      document.getElementById("next").innerHTML = "Shake Token [SHK]";
    }
    if (e.target.id === "shk") {
      document.getElementById("headline").innerHTML = "Shake Token [SHK]";
      document.getElementById("content").innerHTML = this.state.shk;
      document.getElementById("prev").style.opacity = 1;
      document.getElementById("next").style.opacity = 0;
      document.getElementById("prev").innerHTML = "Milquidity [MLQP]";
      document.getElementById("next").innerHTML = "Shake Token [SHK]";
    }
  };

  render() {
    return (
      <div style={{}}>
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 0,
              width: "100%",
              height: "auto",
            }}
          ></div>
        </div>
        <div className="row">
          <div
            className="col-3"
            style={{ float: "left", height: "100%", marginTop: 0 }}
          >
            <ListGroup>
              <ListGroupItem style={{ background: "none" }}>
                <h4>Fractio Documentation</h4>
              </ListGroupItem>
              <ListGroupItem id="welcome" onClick={this.onLink}>
                Welcome
              </ListGroupItem>
              <ListGroupItem id="edutainment" onClick={this.onLink}>
                Fractio Edutainment
              </ListGroupItem>
              <ListGroupItem style={{ opacity: "0" }}></ListGroupItem>
            </ListGroup>
            <br></br>
            <ListGroup>
              <ListGroupItem>
                <h4>Getting started</h4>
              </ListGroupItem>
              <ListGroupItem id="works" onClick={this.onLink}>
                How Fractio Works
              </ListGroupItem>
              <ListGroupItem id="use" onClick={this.onLink}>
                How to utilize Fractio
              </ListGroupItem>
              <ListGroupItem style={{ opacity: "0" }}></ListGroupItem>
            </ListGroup>
            <br></br>
            <ListGroup>
              <ListGroupItem id="tokens" onClick={this.onLink}>
                <h4 id="tokens" onClick={this.onLink}>
                  Tokenomics
                </h4>
              </ListGroupItem>
              <ListGroupItem id="mlq" onClick={this.onLink}>
                Milq Token [MLQ]
              </ListGroupItem>
              <ListGroupItem id="pye" onClick={this.onLink}>
                Pye Token [PYE]
              </ListGroupItem>
              <ListGroupItem id="frx" onClick={this.onLink}>
                Fractio Token [FRX]
              </ListGroupItem>
              <ListGroupItem id="mlqp" onClick={this.onLink}>
                Milquidity [MLQP]
              </ListGroupItem>
              <ListGroupItem id="shk" onClick={this.onLink}>
                Shake Token [SHK]
              </ListGroupItem>
              <ListGroupItem style={{ opacity: "0" }}></ListGroupItem>
            </ListGroup>
            <br></br>
            <ListGroup>
              <ListGroupItem>
                <h4>Resources</h4>
              </ListGroupItem>
              <ListGroupItem id="whitepaper">Whitepaper</ListGroupItem>
              <ListGroupItem id="roadmap" onClick={this.onLink}>
                Roadmap
              </ListGroupItem>
              <ListGroupItem id="github">Github</ListGroupItem>
              <ListGroupItem id="telegram">Telegram</ListGroupItem>
              <ListGroupItem id="medium">Medium</ListGroupItem>
              <ListGroupItem id="insta">Instagram</ListGroupItem>
              <ListGroupItem id="pin">Pinterest</ListGroupItem>
              <ListGroupItem style={{ opacity: "0" }}></ListGroupItem>
            </ListGroup>
          </div>
          <div className="col-9">
            <div>
              <h1 id="headline">Welcome</h1>
              <p className="alert alert-info" id="content">
                {this.state.welcome}
              </p>
            </div>
            <div className="row">
              <Button
                className="col-6"
                style={{
                  marginTop: "2em",
                  color: "lightgrey",
                  background: "#9f95c3",
                  fontSize: "2em",
                  height: "2em",
                  opacity: 0,
                }}
                id="prev"
              >
                Previous
              </Button>
              <Button
                className="col-6"
                style={{
                  marginTop: "2em",
                  color: "lightgrey",
                  background: "#9f95c3",
                  fontSize: "2em",
                  height: "2em",
                }}
                id="next"
              >
                Fractio Edutainment
              </Button>
            </div>
          </div>
        </div>
        {/* 
            <div className="" style={{ float: "right" }}>
                <ListGroup style={{ fontSize: "0.6em", padding: "3px", textAlign: "center", width: "300px" }}>
                    <ListGroup style={{ padding: "0px", textAlign: "left", marginTop: "5px", color: "black" }}>
                    <ListGroupItem>PYE Editor</ListGroupItem>
                        <ListGroupItem>IPFS Integration</ListGroupItem>
                        <ListGroupItem>The Graph Integration</ListGroupItem>
                        <ListGroupItem>UIX Design</ListGroupItem>
                        <ListGroupItem>Filecoin Integration</ListGroupItem>
                        <ListGroupItem>3rd Party Viewer</ListGroupItem>
                        <ListGroupItem>Testnet Launch (Rinkeby)</ListGroupItem>
                    </ListGroup>
                    <ListGroup style={{ padding: "0px", textAlign: "left", marginTop: "5px", color: "black"}}>
                    <ListGroupItem>MLK Token</ListGroupItem>
                        <ListGroupItem>Creator Workshops</ListGroupItem>
                        <ListGroupItem>The Fractionizer</ListGroupItem>
                        <ListGroupItem>Pool Contract</ListGroupItem>
                        <ListGroupItem>Marketplace</ListGroupItem>
                        <ListGroupItem>Operationa Security Tests</ListGroupItem>
                        <ListGroupItem>Mainnet Launch</ListGroupItem>
                    </ListGroup>
                </ListGroup>
            </div>

            /* */}
      </div>
    );
  }
}

export default RoadMap;
