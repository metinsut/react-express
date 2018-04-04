import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { HOME } from "../../constants/routhPath";

const Authentication = ({ children, history, isLogin }) => {
   console.log(isLogin);
   return isLogin !== undefined && isLogin ? children : <Redirect to={HOME} />;
};

const mapStateToProps = state => {
   return {
      isLogin: state.statusLogin.status
   };
};

export default connect(mapStateToProps)(Authentication);