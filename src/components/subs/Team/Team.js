import { findDangerousChanges } from 'graphql';
import React, { Component } from 'react';
const fresh = "#9fe6c3ff";
const sky = "#aad9d8ff";
const purple = "#9f95c3ff";
const grey = "#e2e3dbbf";
const blue = "#7c9cb6ff";
class Team extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h1>This is Team Fractio ...</h1><hr></hr>
            <div className="row mb-5">
                <div className="col-4" style={{background: sky}}><img src="../../../reo.png" alt="" style={{width: "100%"}} /></div>
                <div className="col-8 pt-2" style={{ background: blue, color: fresh }}><b style={{ fontSize: "2em" }}>Aron <i>'stereoTYPE'</i> A.</b>
                <p>Chief Digital Architect<br />
                aron@fractio.xyz<br />
                Germany, Berlin<br />
                <a href="https://github.com/theD1617">theD1617@github</a><br/>
                <i>Always </i></p></div>
            </div>
            <div className="row mb-5">
                <div className="col-8 pt-2" style={{background: purple, color: grey }}><b style={{fontSize: "2em"}}>Daniel 'codeK1LL3R' P.</b><p>Social Media Engineer<br />daniel@fractio.xyz<br /><a href="https://github.com/RIPMyLife">RIPMyLife@github</a></p></div>
                <div className="col-4" style={{background: sky}}><img src="" alt="" /></div>
            </div>
            <div className="row mb-5">
                <div className="col-4" style={{background: sky}}><img src="" alt="" /></div>
                <div className="col-8 pt-2" style={{background: fresh, color: purple }}><b style={{fontSize: "2em"}}>Irvin '1rvin' C.</b><p>Business &amp; Marketing Strategist<br />irvin@fractio.xyz<br /><a href="https://github.com/1rvinC">1rvinC@github</a></p></div>
            </div>
            <div className="row mb-5">
                <div className="col-8 pt-2" style={{background: blue, color: fresh }}><b style={{fontSize: "2em"}}>Louell 'Alchemist21' S.</b><p>Technical &amp; Community Manager<br />louell@fractio.xyz<br /><a href="https://github.com/Alchemist21">Alchemist21@github</a></p></div>
                <div className="col-4" style={{background: sky}}><img src="" alt="" /></div>
            </div>
            <div className="row mb-5">
                <div className="col-4" style={{background: sky}} ><img src="" alt="" /></div>
                <div className="col-8 pt-2" style={{background: grey, color: purple }}><b style={{fontSize: "2em"}}>Nathan 'xHitz' M.</b><p>Operational Security Manager<br />nathan@fractio.xyz<br /><a href="https://github.com/xHitz">xHitz@github</a></p></div>
            </div>
            
        </div> );
    }
}
 
export default Team;