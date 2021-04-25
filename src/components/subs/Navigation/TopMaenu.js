import React, { Component } from 'react';
import { Blockie, EthAddress } from "rimble-ui";
// import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
class TopMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="pb-3 mb-4 border-bottom">
                <div className="row">
                    <div className="col">                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <img src="./logo.png" alt="" style={{ width: "46px" }} /> <h1 style={{ margin: "8px 0em 3px 20px" }}>Fractio.xyz</h1>
                    </a>
                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                        
                        {/*<Blockie opts={{
                        seed: "accounts[0]",
                        color: "#dfe",
                        bgcolor: "#a71",
                        size: 6,
                        scale: 6,
                        spotcolor: "#000"
                    }} />*/}
                    </div></div>
            </header>
         );
    }
}
 
export default TopMenu;