import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Media extends Component {
    static propTypes = {
        layers: PropTypes.array,
        addLayer: PropTypes.func
    };
    render() {
        return (
            <div id="layers" className="col-9 p-0 m-0" style={{ height: "450px", background: "cornflowerblue", color: "ivory" }}>
                <div style={{ background: "white", backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`, width: "750px", height: "430px", overflow: "hidden", position: "relative", top: "10px", left: "10px" }}>
                    {
                        this.props.layers.reverse(),
                        this.props.layers.map(laya => (

                            <div key={laya.key} style={{ width: "750px", height: "430px", position: "absolute", top: "0", left: "0", overflow: "hidden" }}>
                                <img id="layers[layer].obj.alpha" src={`https://ipfs.io/ipfs/${laya.path}`} style={{ position: "absolute", top: `${laya.obj.alpha.y}px`, left: `${laya.obj.alpha.x}px`, width: `${(laya.obj.alpha.z / 100 * ((750) - 20))}px`, opacity: `${laya.obj.alpha.o / 100}`, transform: `rotate(${laya.obj.alpha.r}deg)` }} />
                            </div>
                        ))}
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    layers: state.layerState.layers,
});
export default connect(mapStateToProps)(Media);