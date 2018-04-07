import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { HOME } from "../../constants/routhPath";
import Loading from "../loading/loading";

const Authentication = ({ children, history, isLogin }) => {
      return isLogin === undefined ? (
            <Loading />
      ) : isLogin ? (
            children
      ) : (
            <Redirect to={HOME} />
      );
};

const mapStateToProps = state => {
      return {
            isLogin: state.statusLogin.status
      };
};

export default connect(mapStateToProps)(Authentication);
