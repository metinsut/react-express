import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getLang, logOut, clearGetUser } from "../../actions/index";
import { HOME, SINGUP, LOGIN, ACCOUNT } from "../../constants/routhPath";
import HeaderTitle from "./headerTitle";

class Header extends Component {
      render() {
            const site = this.props.site;
            const header = this.props.header;
            const isLogin = this.props.isLogin;
            return header && site ? (
                  <header>
                        <HeaderTitle
                              title={header.title}
                              {...this.props.isLogin}
                        />
                        <div className="header__user">
                              {isLogin.status === false ? (
                                    <React.Fragment>
                                          <div className="user__item">
                                                <Link
                                                      to={
                                                            this.props.location
                                                                  .pathname ===
                                                            "/"
                                                                  ? HOME + LOGIN
                                                                  : this.props
                                                                          .location
                                                                          .pathname +
                                                                    LOGIN
                                                      }
                                                >
                                                      {header.login}
                                                </Link>
                                          </div>
                                          <div className="user__item">
                                                <Link
                                                      to={
                                                            this.props.location
                                                                  .pathname ===
                                                            "/"
                                                                  ? HOME +
                                                                    SINGUP
                                                                  : this.props
                                                                          .location
                                                                          .pathname +
                                                                    SINGUP
                                                      }
                                                >
                                                      {header.singup}
                                                </Link>
                                          </div>
                                    </React.Fragment>
                              ) : (
                                    <React.Fragment>
                                          <div className="user__item">
                                                <Link to={ACCOUNT}>
                                                      Settings
                                                </Link>
                                          </div>
                                          <div className="user__item">
                                                <div
                                                      className="logout__text"
                                                      onClick={
                                                            this.props.logOut
                                                      }
                                                >
                                                      Logout
                                                </div>
                                          </div>
                                    </React.Fragment>
                              )}
                              <div className="header__line" />
                              <div className="user__lang">
                                    <div
                                          className="lang__text"
                                          onClick={() =>
                                                this.props.changeLang(
                                                      this.props.lang === "tr"
                                                            ? "en"
                                                            : "tr"
                                                )
                                          }
                                    >
                                          {site.lang === "en" ? "TR" : "EN"}
                                    </div>
                              </div>
                        </div>
                  </header>
            ) : null;
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
                  : null,
            isLogin: state.statusLogin
      };
};

const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            changeLang(lang) {
                  dispatch(getLang(lang));
            },
            logOut() {
                  dispatch(logOut());
                  dispatch(clearGetUser());
            }
      };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
