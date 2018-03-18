import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getLang } from "../../actions/index";
import { HOME, SINGUP,LOGIN } from "../../constants/routhPath";

class Header extends Component {
      render() {
            const site = this.props.site;
            const header = this.props.header;
            return (
                  <Fragment>
                        {header && site ? (
                              <header>
                                    <div className="header__title">
                                          <Link to={HOME}>
                                                <h1>{header.title}</h1>
                                          </Link>
                                          <p>{header.desc}</p>
                                    </div>

                                    <div className="header__user">
                                          <div className="user__item user--login">
                                                <Link
                                                      to={LOGIN}
                                                >
                                                      {header.login}
                                                </Link>
                                          </div>
                                          <div className="user__item user--signup">
                                                <Link to={SINGUP}>
                                                      {header.singup}
                                                </Link>
                                          </div>
                                          <div className="user__item user--logout">
                                                <a>Logout</a>
                                          </div>
                                          <div className="header__line" />
                                          <div className="user__lang">
                                                <div
                                                      onClick={() =>
                                                            this.props.changeLang(
                                                                  this.props
                                                                        .lang ===
                                                                  "tr"
                                                                        ? "en"
                                                                        : "tr"
                                                            )
                                                      }
                                                >
                                                      <div className="lang__text">
                                                            {site.lang}
                                                      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
