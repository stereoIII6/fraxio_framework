import React, { Component } from 'react';
class Team extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h1>This is Team Fractio ...</h1><hr></hr>
            <div className="row">
                <div className="col-4 alert-info alert"></div>
                <div className="col-8 alert-success alert"><b>Aron 'theD1617' A.</b><p>Chief Digital Architect<br/>aron@fractio.xyz<br/><a href="https://github.com/theD1617">theD1617@github</a></p></div>
            </div>
            <div className="row">
                <div className="col-8 alert-success alert"><b>Daniel 'codeK1LL3R' P.</b><p>Social Media Engineer<br />daniel@fractio.xyz<br /><a href="https://github.com/RIPMyLife">RIPMyLife@github</a></p></div>
                <div className="col-4 alert-info alert"></div>
            </div>
            <div className="row">
                <div className="col-4 alert-info alert"></div>
                <div className="col-8 alert-success alert"><b>Irvin '1rvin' C.</b><p>Business &amp; Marketing Strategist<br />irvin@fractio.xyz<br /><a href="https://github.com/1rvinC">1rvinC@github</a></p></div>
            </div>
            <div className="row">
                <div className="col-8 alert-success alert"><b>Louell 'Alchemist21' S.</b><p>Technical &amp; Community Manager<br />louell@fractio.xyz<br /><a href="https://github.com/Alchemist21">Alchemist21@github</a></p></div>
                <div className="col-4 alert-info alert"></div>
            </div>
            <div className="row">
                <div className="col-4 alert-info alert"></div>
                <div className="col-8 alert-success alert"><b>Nathan 'xHitz' M.</b><p>Operational Security Manager<br />nathan@fractio.xyz<br /><a href="https://github.com/xHitz">xHitz@github</a></p></div>
            </div>
            
        </div> );
    }
}
 
export default Team;