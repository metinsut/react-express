import React from "react";
import { Link } from "react-router-dom";
import { ROOT } from "../../constants/routhPath";

const HeaderTitle = ({ title, name, status }) => {
   return (
      <React.Fragment>
         <div className="header__title">
            <Link to={ROOT}>
               <h1>{title}</h1>
            </Link>
            {/* <p>{header.desc}</p> */}
         </div>
         {status === true ? (
            <div className="header__wellcome">
               <p>Welcome: {name}</p>
            </div>
         ) : null}
      </React.Fragment>
   );
};

export default HeaderTitle;
