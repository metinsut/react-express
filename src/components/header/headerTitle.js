import React from "react";
import { Link } from "react-router-dom";
import { ROOT } from "../../constants/routhPath";

const HeaderTitle = ({title}) => {
      return (
            <div className="header__title">
                  <Link to={ROOT}>
                        <h1>{title}</h1>
                  </Link>
                  {/* <p>{header.desc}</p> */}
            </div>
      );
};

export default HeaderTitle;