import React, { Component } from 'react';
class Wallet extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="row">
                <h2>Fungibles</h2>
                <div className="col-6 alert alert-danger"><h3>ERC-20</h3></div>
                <div className="col-6 alert alert-danger"><h3>ERC-677</h3></div>
            </div>
            <div className="row">
                <h2>Non Fungibles</h2>
                <div className="col-6 alert alert-danger"><h3>ERC-721</h3></div>
                <div className="col-6 alert alert-danger"><h3>ERC-155</h3></div>
            </div>
        </div> );
    }
}
 
export default Wallet;