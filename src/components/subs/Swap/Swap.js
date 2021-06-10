import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';
import Display from './Display';
class Swap extends Component {
    state = {  }
    render() { 
        return ( <div><div className="container">

        </div>
        <Display style={{ zIndex: "100", marginTop: "2em"}}/>
        <div className="container" style={{ width: "500px", padding: "0", zIndex: "5"}}><div style={{ width: "500px"}}><p className="alert alert-success mt-1">Buy and sell Fractions of ERC721 Assets with digital currency.
Delivered on demand. </p></div></div>
        <div className="container" style={{ width: "500px", marginTop:"3em"}}>
        <div className="row mb-2">
        <Button className="disabled">BUY</Button>
        </div>
        <div className="row">
        <Button className="col mr-1 disabled">SELL</Button><Button className="col ml-1 disabled" >REDEEM</Button>
        </div>
        </div>
        </div> );
    }
}
 
export default Swap;