import React, { Component } from "react";
import { connect } from "react-redux";

class Contact extends Component {
      render() {
            return (
                  <section>
                       <h1>CONTACT</h1>
                  </section>
            );
      }
}

const mapStateToProps = (state, ownProps) => ({
      lang: state.siteLang && state.siteLang.lang,
      site: state.siteLayout && state.siteLayout[state.siteLang.lang]
});

export default connect(mapStateToProps)(Contact);
