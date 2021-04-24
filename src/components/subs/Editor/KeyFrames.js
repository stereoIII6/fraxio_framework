import { Button } from 'reactstrap';
import React, { Component } from 'react';
class KeyFrames extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{textAlign: "center", marginBottom: "2em"}}>
                <Button className="btn btn-info m-2">+</Button>
                <Button className="btn btn-success m-2">Key 0</Button>
                <Button className="btn btn-info m-2">+</Button>
            </div>
         );
    }
}
 
export default KeyFrames;