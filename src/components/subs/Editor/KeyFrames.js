import { Button } from 'reactstrap';
import React, { Component } from 'react';
class KeyFrames extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{textAlign: "center", marginBottom: "2em"}}>
                <Button className="btn btn-info">+</Button>
                <Button className="btn btn-success">Key 0</Button>
                <Button className="btn btn-info">+</Button>
            </div>
         );
    }
}
 
export default KeyFrames;