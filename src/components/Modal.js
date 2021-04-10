import React from 'react';
import ReactDom from "react-dom";
import { Button, Input, Form, InputGroup, CustomInput } from 'reactstrap';
import KeyFrames from './KeyFrames';

const MODAL_STYLES = {
    position: "fixed",
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    transform: "translate(0%,0%)",
    padding: "0px",
    background: "ivory",
    border: "2px solid red",
    opacity: 1,
    zIndex: 1000

}
const OVER_STYLES = {
    position: "relative",
    top: "0",
    width: "100%",
    height: "100%",
    left: "0",
    bottom: "0",
    right: "0",
    background: "limegreen",
    opacity: 0.6,
    padding: "0",
    zIndex: 1000

}

export default function Modal({ open, children, onClose, layer, layers, aKey, rulerChange, priceFeed, onSwitch, goResetLayer, goSaveLayer }) {
    if (!open) return null;
    console.log(layers, priceFeed, "modal start check");



    return ReactDom.createPortal(<>
        <div style={OVER_STYLES}></div>
        <div style={MODAL_STYLES}>
            <div className="row pt-3" style={{ width: "100%" }}>
                <div className="col-10" style={{ width: "75%" }}><h3 className="ml-3">{children}for Layer {layer}</h3></div>
                <div className="col-2"><Button onClick={onClose} className="btn-danger ml-5" style={{ width: "35px", float: "right" }}>x</Button></div>
            </div>
            <hr />
            <div className="p-3">
                <h6>Dynamic Input</h6>
                <Form>
                    <div className="row">
                        <div className="col-4 pb-2">

                            <Input type="select" id={layer} name="select" onChange={onSwitch}>
                                <option key="DEFAULT" id="default" value={"000"}>Choose Oracle</option>
                                <option key="ETH" id={layer} value={(window.web3.utils.fromWei(priceFeed["0"], "Mwei") / 100).toFixed(2)}>{`ETH - ${(window.web3.utils.fromWei(priceFeed["0"], "Mwei") / 100).toFixed(2)} $`}</option>
                                <option key="BTC" id={layer} value={(window.web3.utils.fromWei(priceFeed["1"], "Mwei") / 100).toFixed(2)}>{`BTC - ${(window.web3.utils.fromWei(priceFeed["1"], "Mwei") / 100).toFixed(2)} $`}</option>
                                <option key="LINK" id={layer} value={(window.web3.utils.fromWei(priceFeed["2"], "Mwei") / 100).toFixed(2)}>{`LINK - ${(window.web3.utils.fromWei(priceFeed["2"], "Mwei") / 100).toFixed(2)} $`}</option>
                            </Input>
                            <h6>Trigger Auto Squeeze //{layers[layer].obj.alpha.s / 100 * 2}</h6>
                            <div key={layer} name={layer} id={layer}>
                                <CustomInput type="range" id="s" name={layer} min="0" max="500" value={layers[layer].obj.alpha.s} onChange={rulerChange} /></div>
                            <h6>Triggers </h6>
                            <InputGroup >
                                {/* console.log(layers[layer].obj, layers[layer].key, "input tween check")*/}
                                <Input type="text" id={`keyView0`} placeholder="Top" style={{ background: "MediumSeaGreen" }} />
                                <Input type="text" id={`keyView1`} placeholder="Mid" style={{ background: "LimeGreen" }} />
                                <Input type="text" id={`keyView2`} placeholder="Start" style={{ background: "cornflowerblue" }} />
                                <Input type="text" id={`keyView3`} placeholder="Low" style={{ background: "violet" }} />
                                <Input type="text" id={`keyView4`} placeholder="Bottom" style={{ background: "tomato" }} />
                                <Input type="text" id={`keyView5`} placeholder="Custom" style={{ background: "orange" }} />
                            </InputGroup>
                            <h6>Active</h6>
                            <KeyFrames />
                            {console.log(layers),
                                layers.map(lay => (
                                    Number(lay.key) === layer ? (console.log(layer, layers, lay, "module rulers"),
                                        <div key={layer} name={layer} id={layer}>
                                            <h6>X Position //{layers[layer].obj.alpha.x}</h6>
                                            <CustomInput type="range" id="x" name={layer} min="-750" max="750" value={layers[layer].obj.alpha.x} onChange={rulerChange} />
                                            <h6>Y Position // {layers[layer].obj.alpha.y}</h6>
                                            <CustomInput type="range" id="y" name={layer} min="-430" max="430" value={layers[layer].obj.alpha.y} onChange={rulerChange} />
                                            <h6>Scale {layers[layer].obj.alpha.z}</h6>
                                            <CustomInput type="range" id="z" name={layer} min="1" max="120" value={layers[layer].obj.alpha.z} onChange={rulerChange} />
                                            <h6>Transparancy / Opacity {layers[layer].obj.alpha.o}</h6>
                                            <CustomInput type="range" id="o" name={layer} min="0" max="100" value={layers[layer].obj.alpha.o} onChange={rulerChange} />
                                            <h6>Rotation {layers[layer].obj.alpha.r}</h6>
                                            <CustomInput type="range" id="r" name={layer} min="-360" max="360" value={lay.obj.alpha.r} onChange={rulerChange} />
                                            <Button id={lay.key} className="btn-success" onClick={goSaveLayer}>{`SAVE ${lay.key}`}</Button>
                                            <Button id={lay.key} className="btn-danger" onClick={goResetLayer}>{`RESET ${lay.key}`}</Button>
                                        </div>) : null
                                ))}
                        </div>
                        <div className="col-8" style={{}}>
                            Screen Preview
                            <div style={{
                                backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                                width: "485px", height: "280px", overflow: "hidden", position: "relative", top: "20px", left: "0"
                            }}>
                                {
                                    layers.map(laya => (

                                        Number(laya.key) === layer ? <div key={layer} style={{ width: "485px", height: "280px", position: "absolute", top: "0", left: "0", overflow: "hidden" }}>
                                            {console.log("modal editing layer ", layer)}

                                            <img id={layer} src={`https://ipfs.io/ipfs/${laya.path}`} style={{
                                                position: "absolute", top: `${laya.obj.alpha.y * 2 / 3}px`, left: `${laya.obj.alpha.x * 2 / 3}px`,
                                                width: `${(laya.obj.alpha.z / 100 * ((750 * 2 / 3) - 20))}px`, opacity: `${laya.obj.alpha.o / 100}`, transform: `rotate(${laya.obj.alpha.r}deg)`
                                            }} />
                                        </div> : null
                                    ))}
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </>, document.getElementById("portal")
    )
}