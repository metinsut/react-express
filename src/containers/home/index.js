import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
      render() {
            const { site } = this.props;
            return (
                  <section>
                        {site && (
                              <article>
                                    <p>{site.home.title}</p>
                              </article>
                        )}
                  </section>
            );
      }
}

const mapStateToProps = (state, ownProps) => ({
      lang: state.lang && state.lang.lang,
      site: state.siteLayout && state.siteLayout[state.lang.lang]
});

export default connect(mapStateToProps)(Home);
