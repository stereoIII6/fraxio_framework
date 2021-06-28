import React, { Component } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';
class Settings extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="row">
                <div className="col-4"><h2>Display</h2></div>
                <div className="col-8"><Button color="dark" className="m-2">Dark</Button><Button color="light" className="m-2">Light</Button></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Font Size</h2></div>
                <div className="col-8">
                    <Button color="light" className="m-2">Small</Button>
                    <Button color="light" className="m-2">Medium</Button>
                <Button color="light" className="m-2">Large</Button></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Base  Network</h2></div>
                <div className="col-8"><Input type="select" >
                    <option name="Rinkeby">Rinkeby Testnet</option>
                    <option name="Ethereum">ETH Mainnet</option>
                    <option name="xDai">xDai Mainnet</option>
                   </Input></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Base Currency</h2></div>
                <div className="col-8"><Input type="select" >
                    <option name="MLQ">Milq [MLQ]</option>
                    <option name="ETH">Ether [ETH]</option>
                    <option name="DAI">Dai [DAI]</option>
                   </Input></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Language</h2></div>
                <div className="col-8"><Input type="select" >
                    <option name="EN">English</option>
                    <option name="ES">Espanol</option>
                    <option name="DE">Deutsch</option>
                   </Input></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Timezone</h2></div>
                <div className="col-8"><Input type="select" >
                    <option name="UTC">London</option>
                    <option name="UTC+1">Paris</option>
                    <option name="UTC+2">Berlin</option>
                    <option name="UTC+3">+3</option>
                    <option name="UTC+4">+4</option>
                    <option name="UTC+5">+5</option>
                    <option name="UTC+6">+6</option>
                    <option name="UTC+7">+7</option>
                    <option name="UTC+8">New York</option>
                    <option name="UTC+9">+9</option>
                    <option name="UTC+10">+10</option>
                    <option name="UTC+11">+11</option>
                    <option name="UTC+12">Los Angeles</option>
                    <option name="UTC+13">+13</option>
                    <option name="UTC+14">+14</option>
                    <option name="UTC+15">+15</option>
                    <option name="UTC+16">+16</option>
                    <option name="UTC+17">+17</option>
                    <option name="UTC+18">+18</option>
                    <option name="UTC+19">+19</option>
                    <option name="UTC+20">+20</option>
                    <option name="UTC+21">+21</option>
                    <option name="UTC+22">+22</option>
                    <option name="UTC+23">+23</option>
                   
                   </Input></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4"><h2>Membership</h2></div>
                <div className="col-8"><Input type="select" >
                    <option name="0">Free</option>
                    <option name="1">Member</option>
                    <option name="2">Supporter</option>
                   </Input></div>
            </div>
            <hr></hr>
            <div className="row">
                <InputGroup>
                <Input type="button" style={{width:"50%",height:"2em", fontSize:"2em",color:"lightgrey", background:"#9f95c3"}} value="RESET"/>
                <Input type="button" style={{width:"50%",height:"2em", fontSize:"2em", color:"lightgrey",background:"#9f95c3"}} value="UPDATE"/>
                </InputGroup>
            </div>
        </div> );
    }
}
 
export default Settings;