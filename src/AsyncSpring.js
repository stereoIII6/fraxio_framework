import React, { PureComponent } from "react";
import { Spring, animated } from "react-spring";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { onCreateNow } from "./action/userActions";
class AsyncSpring extends PureComponent {
  static propTypes = {
    onCreateNow: PropTypes.func,
  };
  state = {
    mX: 0,
    mY: 0,
  };
  mMove = (e) => {
    let mX = e.pageX;
    let mY = e.pageY;
    console.log(e.pageX);
    this.setState({ mX: mX, mY: mY });
    console.log(this.state.mX, this.state.mY);
  };
  render() {
    return (
      <div
        style={{ background: "none", width: "100%", height: "800px" }}
        onMouseMove={this.mMove}
      >
        <Spring
          easing
          config="stiff"
          loop
          from={{
            opacity: 0,
            color: "red",
            x: `${this.state.mX / 4 - 200}px`,
            y: `${this.state.mY / 4}px`,
          }}
          to={[
            {
              opacity: 1,
              color: "#ffaaee",
              x: `${this.state.mX / 4}px`,
              y: `${this.state.mY / 4}px`,
            },
          ]}
        >
          {(styles) => (
            <animated.div style={styles}>
              <h1>I will fade in and out</h1>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { onCreateNow })(AsyncSpring);
