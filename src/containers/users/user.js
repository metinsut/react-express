import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class User extends Component {
      render() {
            return (
                  <section>
                        <h1>{this.props.match.params.id}</h1>
                  </section>
            );
      }
}

export default withRouter(User);
