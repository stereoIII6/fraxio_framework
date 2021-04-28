import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { getUsers, setScreenMode } from "../../action/userActions";
import Blockies from 'react-blockies';
import { Button } from 'reactstrap';

class TopMenu extends Component {
    static propTypes = {
        getUsers: PropTypes.func,
        setScreenMode: PropTypes.func,
        screenMode: PropTypes.string
    };
    state = {
        screenMode: "about"
    };
    onClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        this.setState({screenMode: e.target.id});
        this.props.setScreenMode(e.target.id);
    }
    render() { 
        return ( 
            <header className="pb-3 mb-4 border-bottom">
                <div className="row">
                    <div className="col">                
                        <div className="d-flex align-items-center text-dark text-decoration-none" >
                            <img src="./logo.png" alt="" style={{ width: "46px" }} onClick={this.onClick} id="landing_lnk" /> 
                            <h1 style={{ margin: "8px 0em 3px 20px" }} onClick={this.onClick} id="landing_lnk">Fractio.xyz</h1>
                    </div>
                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                        <Button className="btn p-2" onClick={this.onClick}
                            id="dashboard_lnk" >
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
                        <div className="col-8 pb-0 mb-0">
                            <Button className="btn btn-light" onClick={this.onClick} id="about_lnk" >About</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="team_lnk" >Team</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="roadmap_lnk" >RoadMap</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="pyeditor_lnk" >PYEditor</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="freezer_lnk" >Fractionize</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="swap_lnk" >Swap</Button>
                            <Button className="btn btn-light" onClick={this.onClick} id="contact_lnk" >Contact</Button>
                        </div>
                        
                        <div className="col-4 pb-0 mb-0">
                        <Button className="btn btn-light" onClick={this.onClick} id="account_lnk" style={{float:"right"}} >Account</Button>
                        <Button className="btn btn-light" onClick={this.onClick} id="wallet_lnk" style={{float:"right"}} >Wallet</Button>
                        <Button className="btn btn-light" onClick={this.onClick} id="settings_lnk" style={{float:"right"}} >Settings</Button>
                        
                        </div>
                    </div>
            </header>
         );
    }
}
const mapStateToProps = state => ({
    screenMode: state.userState.screenMode
});
export default connect(mapStateToProps, { getUsers, setScreenMode })(TopMenu);