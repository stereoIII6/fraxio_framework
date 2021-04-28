import React, { Component } from 'react';
import { Button, InputGroup, Input, CustomInput, Form } from 'reactstrap';
import styled from 'styled-components';

class LayerInput extends Component {
    state = {
        layerType: "empty",
        layerFeed: "static",
        file: null,
        layerName: ""
    }
    handleClick = (e) => {
            document.getElementById('upload').click();
            document.getElementById('upload').onchange = () => {
                this.setState({
                    file: document.getElementById('upload').value
                });
                console.log(this.state.file)
            }
        }
    render() {
        return (
            <div><Form>
                    <InputGroup bssize="normal" onSubmit={this.onSubmit}>
                        <Input type="select" bssize="normal" name="LayerData" id="LayerData" onChange={this.onChange}>
                            <option name="default" value="default" bssize="normal">Choose Layer Type</option>
                            <option name="empty" value="empty" bssize="normal">Empty</option>
                            <option name="form" value="form" bssize="normal">SVG Form</option>
                            <option name="typo" value="typo" bssize="normal">Typography</option>
                            <option name="img" value="img" bssize="normal">Images</option>
                            <option name="audio" value="audio" bssize="normal">Audio</option>
                            <option name="video" value="video" bssize="normal">Video</option>
                        </Input>
                        <Input type="select" bssize="normal" style={{ width: "90px" }} name="LayerFeed" id="LayerFeed" onChange={this.onChange}>
                            <option name="default" value="default" >Choose Oracle Feed</option>
                            <option name="static" value="static">No Feed</option>
                            <option name="time" value="time">Timeline Feed</option>
                            <option name="pfeed" value="pfeed">Price Feed</option>
                            <option name="sports" value="sports">Sport Results Feed</option>
                        </Input>
                        <>
                            <Button onClick={this.handleClick} id="upbtn" className="btn btn-info" >
                                { this.state.file !== null ? this.state.file : <div>Upload 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                                </svg></div>}
                            </Button>
                            <input type="file"
                            id="upload"
                                ref={this.hiddenFileInput}
                                onChange={this.handleChange}
                                style={{ display: 'none' }}
                            />
                        </>
                        <Input type="text" bssize="normal" placeholder="Name" name="LayerName" id="LayerName" onChange={this.onChange} />
                        <Button type="submit" className="btn btn-success" >+ < svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layers-half" viewBox="0 0 16 16">
                            <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                        </svg></Button>
                    </InputGroup>
                    <label>Create a new Layer</label>
                </Form>
            </div>);
    }
}

export default LayerInput;