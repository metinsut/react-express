import React, { Component } from "react";

class Header extends Component {
      render() {
            return (
                  <header>
                        <div className="header__title">
                              <h1>User Data Service</h1>
                        </div>
                        <div className="header__user">
                              <div className="user__item user--login">
                                    <a href="">Login</a>
                              </div>
                              <div className="user__item user--signup">
                                    <a href=""> Singup</a>
                              </div>
                              <div className="user__item user--logout">
                                    <a href="">Logout</a>
                              </div>
                        </div>
                  </header>
            );
      }
}

export default Header;
