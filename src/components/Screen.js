import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { getUsers } from "./action/userActions.js";
import Editor from './subs/Editor/Editor';
import Team from './subs/Team/Team';
import About from './subs/About/About';
import Contact from './subs/Contact/Contact.js';
import RoadMap from './subs/RoadMap/RoadMap.js';
import Freezer from './subs/Freezer/Freezer.js';
import Swap from './subs/Swap/Swap.js';
class Screen extends Component {
    static propTypes = { 
        getUsers: PropTypes.func,
        screenMode: PropTypes.string
     };
    render() { 
        return ( 
            <div>{
                this.props.screenMode === "pyeditor_lnk" ? <Editor /> :
                this.props.screenMode === "about_lnk" ? <About /> :
                this.props.screenMode === "team_lnk" ? <Team /> : 
                this.props.screenMode === "contact_lnk" ? <Contact /> :
                this.props.screenMode === "roadmap_lnk" ? <RoadMap /> :
                this.props.screenMode === "freezer_lnk" ? <Freezer /> :
                this.props.screenMode === "swap_lnk" ? <Swap /> : null
                 

    }</div>
         );
    }
}
const mapStateToProps = state => ({ 
    screenMode: state.userState.screenMode
 });
export default connect(mapStateToProps, { getUsers })(Screen);