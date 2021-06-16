import React, { Component} from 'react';
import { connect, dispatch } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, setScreenMode, getWalletERC721 } from "../../action/userActions";
import {Button, Input, InputGroup, Form, FormGroup, Alert} from "reactstrap";
import Web3 from "web3";


//import Factory from "../abis/Factory.json";
//import Fractionizer from "../abis/Fractionizer.json";


const RinkFRXAddress = "";
const RinkFACAddress = "";


class Freezer extends Component {

    state = {
        NFT: null,
        NFTID: 0,
        FRXNAME: "",
        FRXSYM: "",
        ERCPEG: 0xc28e24cddb16b729a25baa21e9d670033897ba1f,
        FRXSUPPLY: 0,
        PEGPRICE: 0,
        erc721TXs:[]

    }

    static propTypes = {
        getUsers: PropTypes.func,
        getWalletERC721: PropTypes.func,
        erc721s: PropTypes.array,
        loading: PropTypes.bool,
        users: PropTypes.array 
    }; 

    
    
     
    componentDidMount(){
        const hardADR = this.props.users[0];
        const userTXList = `https://api-rinkeby.etherscan.io/api?module=account&action=tokennfttx&address=${hardADR}&startblock=0&endblock=999999999&sort=asc&apikey=G6QIM7PASIXPRDRV7KJVWQV196FU6T4KKT`;
        const ERC721s = fetch(userTXList)
        .then(response => response.json())
        .then(data => 
        {
            
            const dataMin = data.result;
            console.log(dataMin);
            this.setState({erc721TXs: dataMin})
            this.props.getWalletERC721(dataMin);    
        });
        
        
    }
    render() { 
  
        
        return ( <div>
            {
                // Render Users Tokens
                <Form>
                    <FormGroup>
                        <h3 style={{marginTop: "0"}}> STEP 1 : Choose your ERC721 Assets</h3>
                        
                        <Alert style={{width:"100%", height: "110px", overflow:"hidden", background: "ivory"}}>
                        {
                        
                            // console.log(this.state.erc721TXs)
                            <div id="slideshow" style={{position: "relative", overflow: "hidden"}}>
                                <div id="slider" style={{position: "relative", top: "0", left: "0", width: `${this.state.erc721TXs.length * 120}px`, height: "90px"}}>
                                {
                            
                                this.state.erc721TXs.map(tx => 
                                
                                <div key={tx.contractAddress+"/"+tx.tokenID+""+tx.hash} style={{ width: "80px", height:"80px", overflow: "hidden", marginRight: "10px", float: "left", background:"lightgrey", padding:"5px",lineBreak: "anywhere", fontSize: "0.5em"}}>
                                    {tx.contractAddress+"/"+tx.tokenID}</div>
                                    
                                    )
                                }
                                </div>
                            </div>
                        }
                        </Alert>
                        <h3 style={{marginTop: "2em"}}> STEP 2 : Choose Name &amp; Symbol for your Fractional Tokens</h3>
                        <InputGroup>
                            <Input type="text" placeholder="Fractional Token Name" style={{height: "3em"}}/>
                            <Input type="text" placeholder="Fractional Token Symbol" style={{height: "3em"}}/>
                        </InputGroup>

                        <h3 style={{marginTop: "2em"}}> STEP 2 : Choose Supply Cap &amp; Distribution Method</h3>
                        <InputGroup>
                        <Input type="text" placeholder="Token Supply" style={{height: "3em"}}/>
                            <Input type="select" style={{height: "3em"}}>
                                <option id="default" >Choose Option</option>
                                <option id="airdrop" >Self Mint</option>
                                <option id="airdrop" >Airdrop</option>
                                <option id="airdrop" >Device ID</option>
                                <option id="airdrop" >Sale</option>
                                <option id="airdrop" >Auction</option>
                                <option id="airdrop" >Order Book</option>
                                <option id="airdrop" >Pool</option>
                            </Input>                            
                        </InputGroup>
                        <h3 style={{marginTop: "2em"}}> STEP 3 : Choose Price &amp; Currency</h3>
                        <InputGroup>
                        <Input type="text" placeholder="Price" style={{height: "3em"}}/>
                            <Input type="select" style={{height: "3em", marginBottom: "3em"}}>
                                <option id="MLQ" >MLQ</option>
                                <option id="ETH" >ETH</option>
                                <option id="DAI" >Dai</option>
                                <option id="LINK" >Link</option>
                                <option id="UNI" >Uni</option>
                                <option id="USDC" >USDC</option>
                                <option id="GRT" >TheGraph</option>
                                <option id="wFIL" >wFIL</option>
                                <option id="wBTC" >wBTC</option>
                                <option id="custom">custom</option>
                            </Input> 
                        </InputGroup>
                        <InputGroup >
                        <Input type="button" id="violet" value="Approve" style={{height: "3em", fontSize: "2em"}}></Input>
                        <Input type="button" id="grey" value="Submit" style={{height: "3em", fontSize: "2em"}}></Input>
                        </InputGroup>
                    </FormGroup>
                </Form>
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
        </div> );
    }
}
 
const mapStateToProps = state => ({
    erc721s: state.userState.erc721s,
    users: state.userState.users
});
export default connect(mapStateToProps, { getUsers, getWalletERC721 })(Freezer);