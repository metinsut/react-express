import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
      render() {
            const { site } = this.props;
            const token =     localStorage.getItem("userToken")
            return (
                  <section>
                        {site && (
                              <article>
                                    <p>{site.home.title}</p>
                                    {
                                      token && <div>{token}</div>
                                    }
                              </article>
                        )}
                  </section>
            );
      }
}

const mapStateToProps = (state, ownProps) => ({
      lang: state.siteLang && state.siteLang.lang,
      site: state.siteLayout && state.siteLayout[state.siteLang.lang]
});

export default connect(mapStateToProps)(Home);
