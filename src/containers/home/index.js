import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Home extends Component {
      render() {
            console.log(this.props.site);
            // let { home,footer,header } = this.props.site;
            // console.log(this.props.site && home)
            return (
                  <Fragment>
                        {this.props.site ? <p>{this.props.site.home.title}</p>: <p>Test</p>}
                  </Fragment>
            );
      }
}

const mapStateToProps = (state, ownProps) => ({
      lang: state.lang && state.lang.lang,
      site: state.siteLayout && state.siteLayout[state.lang.lang]
});

export default connect(mapStateToProps)(Home);
