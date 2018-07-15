import React, { Component } from "react";
import {Link} from "react-router-dom";
import * as R from "../../constants/routhPath";

class Menu extends Component {
      render() {
            return (
                  <nav className="nav__menu__root">
                        <ul className="nav__menu">
                              <li className="menu__item">
                                    <Link to={R.HOME}>
                                          <div className="item__icon">a</div>
                                          <p className="item__name">Home</p>
                                    </Link>
                              </li>
                              <li className="menu__item">
                                    <Link to={R.ABOUT}>
                                          <div className="item__icon">b</div>
                                          <p className="item__name">About</p>
                                    </Link>
                              </li>
                              <li className="menu__item">
                                    <Link to={R.CONTACT}>
                                          <div className="item__icon">c</div>
                                          <p className="item__name">Contact</p>
                                    </Link>
                              </li>
                              <li className="menu__item">
                                    <Link to={R.USERS}>
                                          <div className="item__icon">L</div>
                                          <p className="item__name">USERS</p>
                                    </Link>
                              </li>
                              <li className="menu__item">
                                    <Link to={R.PERSONS}>
                                          <div className="item__icon">e</div>
                                          <p className="item__name">PERSONS</p>
                                    </Link>
                              </li>
                        </ul>
                  </nav>
            );
      }
}

export default Menu;