import React, { Component } from 'react';
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( <div><h1>Dashboard</h1><hr></hr>
        <div className="row">
            <div className="col-5"><h3>Plattform Stats</h3></div>
            <div className="col-7">
                <div><h3>Community</h3>

                <p className="alert alert-info">
                    <b>
                    Testnet@ComingSoon</b><br/>
                    Full.Xperimental.Fractio.Env<br/>
                    COMING.SOON
                </p>
                
                </div>
                <div><h3>History</h3>
                
                <p className="alert alert-info">
                    <b>
                    Fractio@Tachyon</b><br/>
                    Filecoin.Launchpad.Accellerator.Program<br/>
                    CohortII.2021.YEAH
                </p>
                <p  className="alert alert-info">
                    <b>
                    Fractio@Delaware</b><br/>
                    Founded.CCorp.062021.FractioXYZ<br/>
                    Feet@Ground.Mind@Moon<br/>
                    Hello@World
                </p>

                </div>
            </div>
        </div>
        <div className="row"></div>
        </div> );
    }
}
 
export default Dashboard;