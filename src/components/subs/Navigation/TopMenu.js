import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import Blockies from 'react-blockies';
import { Button } from 'reactstrap';

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
                       <Button className="btn p-2">
                        <Blockies 
                        seed="accounts[0]"
                        color="#dfe"
                        bgcolor="#a71"
                        size={6}
                        scale={3}
                        spotcolor="#000"
                            />{" account[0] "}
                            </Button>
                    </div></div>
                    <div className="row">
                        <div className="col-7 pb-0 mb-0">
                            <Button className="btn btn-light" >About</Button>
                            <Button className="btn btn-light" >Team</Button>
                            <Button className="btn btn-light" >RoadMap</Button>
                            <Button className="btn btn-light" >PYEditor</Button>
                            <Button className="btn btn-light" >Freezers</Button>
                            <Button className="btn btn-light" >Swap</Button>
                            <Button className="btn btn-light" >Contact</Button>
                        </div>
                        <div className="col pb-0 mb-0"></div>
                        <div className="col-4 pb-0 mb-0">
                        <Button className="btn btn-light" style={{float:"right"}} >Account</Button>
                        <Button className="btn btn-light" style={{float:"right"}} >Wallet</Button>
                        <Button className="btn btn-light" style={{float:"right"}} >Settings</Button>
                        </div>
                    </div>
            </header>
         );
    }
}
 
export default TopMenu;