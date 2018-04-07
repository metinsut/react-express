import React from "react";
import { Link } from "react-router-dom";
import * as R from "../../constants/routhPath";

class AccountMenuContainer extends React.Component {
      render() {
            return (
                  <article className="account__menu">
                        <div className="menu__title">
                              <h3 className="title__text">Personal Settings</h3>
                        </div>
                        <nav className="menu__items">
                              <Link to={R.ACCOUNT + R.PROFILE}>Profile</Link>
                              <Link to={R.ACCOUNT + R.EMAIL}>Email</Link>
                              <Link to={R.ACCOUNT + R.PASSWORD}>Password</Link>
                              <Link to={R.ACCOUNT + R.PHOTO}>Photo</Link>
                        </nav>
                  </article>
            );
      }
}

export default AccountMenuContainer;
