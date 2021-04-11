import React, { Component } from 'react';
import Web3 from "web3";
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { doToggle, activateLayer, deActivateLayer, changeKey, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer } from "./action/layerActions.js";
import OracleNFT from "../abis/OracleNFT.json";
import { findLastIndex } from 'lodash';
const RinkPYEAddress = '0xAcE3f096A5B7b84939eAc2A26C04C50da531F719';
const _ = require('lodash');
class Freezer extends Component {

    state = {
        good: { 
            pyeName: "",
            pyeLockBalance: 0,
            LayerArray: [],
            infoPriv: "",
            infoPub: "",
            save: false
        },
        init: {
            pyeName: "",
            pyeLockBalance: 0,
            LayerArray: [],
            infoPriv: "",
            infoPub: "",
            save: false
        },
        send: false
    }

    static propTypes = {
        layers: PropTypes.array,
        priceFeed: PropTypes.object,
        addLayer: PropTypes.func,
        deleteLayer: PropTypes.func,
        moveLayer: PropTypes.func,
        layersLoaded: PropTypes.func,
        bakeAlpha: PropTypes.func,
        editLayer: PropTypes.func,
        activeLayer: PropTypes.number,
        activeKey: PropTypes.number,
        isOpen: PropTypes.bool,
        doToggle: PropTypes.func,
        activateLayer: PropTypes.func,
        deActivateLayer: PropTypes.func,
        changeKey: PropTypes.func,
    };
    async componentWillMount() {
        await this.loadWeb3();
        // await this.doAsync(this.state.good);
        // this.setState({ LayerArray: JSON.stringify(this.props.layers) });    
        console.log(this.state.good);
        // await this.loadBlockChainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            console.log("ethereum", window.ethereum);
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            console.log("web3", window.web3, this.state.good);
        }
        else window.alert("Use a Metamask");
    }

    savePYE = (e) => {
        e.preventDefault();
        console.log(this.state.good, "goodstate");
        this.setState({send: true});
        this.doAsync(this.state.good);
        

    }

    async doAsync(state) {
        console.log("arrived", this.state, state);
        const web3 = window.web3;

            const accounts = await web3.eth.getAccounts();
            const RinkPYEFreezer = new web3.eth.Contract(OracleNFT.abi, RinkPYEAddress);
            console.log(accounts[0], state);        
        const result = await RinkPYEFreezer.methods.bakePYE(accounts[0], state).send({ from: accounts[0] });
            console.log(result);
            this.state.send = false;
               
    }

    onChange = (e) => {
        //
        console.log(e.target) ;
        const value =
            e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value;
        this.setState({good:{[e.target.name]: value }});
        this.setState({ LayerArray: JSON.stringify(this.props.layers) });
        console.log(this.state);
        // console.log("onChange name", e.target.name, e.target.value);
    }

    render() {

        return (<div>
            <div className="col">SAVE PYEOBJECT ON CHAIN...

                        <br />
                <InputGroup>
                    <Input type="text" name="namePYE" placeholder="ARTWORK NAME" onChange={this.onChange} value={this.state.good.pyeName} />
                    <Input type="text" name="locker" placeholder="ETH 2 LOCK" onChange={this.onChange } value={ this.state.good.pyeLockBalance } />
                    <Input type="textarea" name="public" placeholder="PUBLIC" onChange={this.onChange} value={this.state.good.infoPriv } />
                    <Input type="textarea" name="private" placeholder="PRIVATE" onChange={this.onChange} value={this.state.good.infoPub } />
                    <Input type="textarea" name="pyeArray" placeholder="PYE ARRAY" onChange={this.onChange} value={this.state.good.LayerArray} />

                    <Button onClick={this.savePYE}>SAVE PYE</Button>
                </InputGroup>

            </div>

            <div className="col-3" style={{ wordWrap: "break-word", fontSize: "1em" }} >
                {JSON.stringify(this.props.layers)}
            </div>
        </div>


        );
    }
}
const mapStateToProps = state => ({
    layers: state.layerState.layers,
    priceFeed: state.layerState.priceFeed,
    isOpen: state.layerState.isOpen,
    activeLayer: state.layerState.activeLayer,
    activeKey: state.layerState.activeKey
});
export default connect(mapStateToProps, { doToggle, changeKey, activateLayer, deActivateLayer, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer })(Freezer);
