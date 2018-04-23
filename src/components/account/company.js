import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCompany } from "../../actions/index";
import CompanyComponent from "../../components/account/companyComponent";

class Company extends Component {
      render() {
            return (
                  <div className="profile__root">
                        <div className="account__title">
                              <h1>YOUR PROFILE</h1>
                        </div>
                        <div className="company__root">
                              <div className="company__item">
                                    <div className="company__info">
                                          <div className="info__name info__item">
                                                <p>Company Name</p>
                                                <p>Infotech</p>
                                          </div>
                                          <div className="info__position info__item">
                                                <p>Position</p>
                                                <p>Field Engineer</p>
                                          </div>
                                          <div className="info__startYear info__item">
                                                <p>Start Year</p>
                                                <p>2000</p>
                                          </div>
                                          <div className="info__endYear info__item">
                                                <p>End Year</p>
                                                <p>2005</p>
                                          </div>
                                    </div>
                                    <div className="company__edit">G</div>
                              </div>
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = state => {
      return {
            account: state.getUser,
            initialValues: { stillWork: false }
      };
};

const mapDispatchToProps = dispatch => {
      return {
            onSaveData: data => {
                  const token = localStorage.getItem("userToken");
                  dispatch(
                        updateCompany({
                              ...{ company: data },
                              ...{ token: token }
                        })
                  );
            }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
