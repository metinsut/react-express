import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Logout extends Component {
      render() {
            return (
                  <section>
                        <h1>Log out</h1>
                  </section>
            );
      }
}

export default withRouter(Logout);