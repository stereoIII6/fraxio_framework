import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { getUsers, setScreenMode } from "../../action/userActions";
import Blockies from 'react-blockies';
import { Button } from 'reactstrap';
const fresh = "#9fe6c3ff";
const sky = "#aad9d8ff";
const purple = "#9f95c3ff";
const grey = "#e2e3dbff";
const blue = "#7c9cb6ff";

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
        this.setState({ screenMode: e.target.id });
        this.props.setScreenMode(e.target.id);
    }
    render() {
        return (
            <header className="pb-3 mb-4 border-bottom">
                <div className="row mb-2">
                    <div className="col">
                        <div className="d-flex align-items-center text-dark text-decoration-none" >
                            <img src="../../../logo.png" alt="" style={{ width: "46px" }} onClick={this.onClick} id="landing_lnk" />
                            <h1 style={{ margin: "8px 0em 3px 20px" }} onClick={this.onClick} id="landing_lnk">Fractio.xyz</h1>
                        </div>
                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                        <div className="btn p-2 mr-1" onClick={this.onClick} style={{ background: sky, color: blue, borderRadius: "9px" }} id="mlk_lnk">
                            0 MLK
                        </div>
                        <div className="btn p-2 mr-1" style={{ background: grey, color: purple, borderRadius: "9px" }} id="net">
                            network
                        </div>
                        <div className="btn p-2 mr-1" onClick={this.onClick}
                            id="dashboard_lnk"
                            style={{ color: fresh, background: purple, fontWeight: 900, borderRadius: "9px" }} >
                            <Blockies

                                seed="accounts[0]"
                                color="#dfe"
                                bgcolor="#a71"
                                size={6}
                                scale={3}
                                spotcolor="#000"
                            />{" account[0] "}
                        </div>
                        <div className="btn p-2" onClick={this.onClick} style={{background:blue, color: fresh,borderRadius: "9px"}} id="accmenu_lnk">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                    </div></div>
                <div className="row">
                    <div className="col-8 pb-0 mb-0">
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="about_lnk" >About</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="team_lnk" >Team</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="roadmap_lnk" >RoadMap</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="pyeditor_lnk" >PYEditor</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="freezer_lnk" >Fractionize</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="swap_lnk" >Swap</div>
                        <div className="btn mr-1" style={{ color: grey, background: purple, fontWeight: 900, borderRadius: "9px" }} onClick={this.onClick} id="contact_lnk" >Contact</div>
                    </div>

                    <div className="col-4 pb-0 mb-0">
                        <div className="btn mr-1" style={{ color: purple, background: fresh, fontWeight: 900, borderRadius: "9px", float: "right" }} onClick={this.onClick} id="account_lnk"  >Account</div>
                        <div className="btn mr-1" style={{ color: purple, background: fresh, fontWeight: 900, borderRadius: "9px", float: "right" }} onClick={this.onClick} id="wallet_lnk" >Wallet</div>
                        <div className="btn mr-1" style={{ color: purple, background: fresh, fontWeight: 900, borderRadius: "9px", float: "right" }} onClick={this.onClick} id="settings_lnk" >Settings</div>

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