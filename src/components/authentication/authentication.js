// import React from "react";
import { connect } from "react-redux";

const Authentication = ({ children, history, isLogin }) => {
   return (
      children
   );
};

const mapStateToProps = state => {
   return {
      isLogin: state.statusLogin.status
   };
};

export default connect(mapStateToProps)(Authentication);