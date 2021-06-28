import React, { Component } from 'react';
import MaskOne from './MaskOne';
import MaskTwo from './MaskTwo';
import MaskThree from './MaskThree';
class Editor extends Component {
    onNext = (e) => {
        e.preventDefault();

    }
    render() { 
        return ( 
        <div>
            <MaskOne />
            <MaskTwo />
            <MaskThree />
        </div>
         );
    }
}
 
export default Editor;