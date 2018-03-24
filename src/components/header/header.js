import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getLang ,logOut} from "../../actions/index";
import { HOME, SINGUP, LOGIN } from "../../constants/routhPath";
import HeaderTitle from "./headerTitle";

class Header extends Component {
      render() {
            const site = this.props.site;
            const header = this.props.header;
            return header && site ? (
                  <header>
                        <HeaderTitle title={header.title} />
                        <div className="header__user">
                              <div className="user__item user--login">
                                    <Link
                                          to={
                                                this.props.location.pathname ===
                                                "/"
                                                      ? HOME + LOGIN
                                                      : this.props.location
                                                              .pathname + LOGIN
                                          }
                                    >
                                          {header.login}
                                    </Link>
                              </div>
                              <div className="user__item user--signup">
                                    <Link
                                          to={
                                                this.props.location.pathname ===
                                                "/"
                                                      ? HOME + SINGUP
                                                      : this.props.location
                                                              .pathname + SINGUP
                                          }
                                    >
                                          {header.singup}
                                    </Link>
                              </div>
                              <div className="user__item user--logout">
                                    <div
                                    className="logout__text"
                                    onClick={this.props.logOut}
                                    >Logout</div>
                              </div>
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
                                          {site.lang}
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
                  : null
      };
};

const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            changeLang(lang) {
                  dispatch(getLang(lang));
            },
            logOut(){
                  dispatch(logOut());
            }
      };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
