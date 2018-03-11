import React, { Component } from "react";

class Menu extends Component {
      render() {
            return (
                  <nav className="nav__menu__root">
                        <ul className="nav__menu">
                              <li className="menu__item">
                                    <a href="">
                                          <div className="item__icon">a</div>
                                          <p className="item__name">Home</p>
                                    </a>
                              </li>
                              <li className="menu__item">
                                    <a href="">
                                          <div className="item__icon">b</div>
                                          <p className="item__name">About</p>
                                    </a>
                              </li>
                              <li className="menu__item">
                                    <a href="">
                                          <div className="item__icon">c</div>
                                          <p className="item__name">Contact</p>
                                    </a>
                              </li>
                        </ul>
                  </nav>
            );
      }
}

export default Menu;
