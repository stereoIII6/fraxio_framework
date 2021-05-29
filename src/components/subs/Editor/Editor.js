import React, { Component } from 'react';
import MaskOne from './MaskOne';
import MaskTwo from './MaskTwo';
import MaskThree from './MaskThree';
class Editor extends Component {
    state = {
        page: 0,
        data:{
            name: "",
            dimension: {
                x: 900,
                y: 900
            },
            artist: 0x0,
            minted: 0,
            id: ""
        }
      }
    render() { 
        return ( 
            this.state.page === 0 ? <div>
            <MaskOne />
                <MaskTwo />
                <MaskThree />
            </div> :
                this.state.page === 1 ? <div>PYE Layer Editor</div> :
                    this.state.page === 2 ? <div>PYE Keyframe Editor</div> : null
         );
    }
}
 
export default Editor;