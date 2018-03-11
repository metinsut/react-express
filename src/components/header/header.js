import React, { Component, Fragment } from "react";
// import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { getLang } from "../../actions/index";

class Header extends Component {
      render() {
            const site = this.props.site;
            const header = this.props.header;
            const data = this.props.lang === "TR" ? "EN" : "TR";
            return (
                  <Fragment>
                        {header && site ? (
                              <header>
                                    <div className="header__title">
                                          <h1>{header.title}</h1>
                                          <p>{header.desc}</p>
                                    </div>

                                    <div className="header__user">
                                          <div className="user__item user--login">
                                                <a href="">{header.login}</a>
                                          </div>
                                          <div className="user__item user--signup">
                                                <a href=""> {header.singup}</a>
                                          </div>
                                          <div className="user__item user--logout">
                                                <a href="">{header.logout}</a>
                                          </div>
                                          <div className="header__line" />
                                          <div className="user__lang">
                                                <div
                                                      onClick={() =>
                                                            this.props.changeLang(
                                                                  data
                                                            )
                                                      }
                                                >
                                                      {site.lang}
                                                </div>
                                          </div>
                                    </div>
                              </header>
                        ) : null}
                  </Fragment>
            );
      }
}

const mapStateToProps = (state, ownProps) => {
      return {
            lang: state.siteLang.lang ? state.siteLang.lang : null,
            site: state.siteLayout[state.siteLang.lang]
                  ? state.siteLayout[state.siteLang.lang]
                  : null,
            header: state.siteLayout[state.siteLang.lang]
                  ? state.siteLayout[state.siteLang.lang].header
                  : null
      };
};

const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            changeLang(lang) {
                  dispatch(getLang(lang));
            }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
