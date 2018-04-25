import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCompany } from "../../../actions/index";
import CreateCompanyItem from "./createCompanyItem";

class Company extends Component {
    render() {
        console.log(this.props.company);
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>
                <div className="company__root">
                    <CreateCompanyItem onSaveData={this.props.onSaveData}/>

                    <div className="company__item">
                        <div className="company__info">
                            <div className="info__name info__item">
                                <p className="info__label">Company Name</p>
                                <p className="info__value">Infotech</p>
                            </div>
                            <div className="info__position info__item">
                                <p className="info__label">Position</p>
                                <p className="info__value">Field Engineer</p>
                            </div>
                            <div className="info__startYear info__item">
                                <p className="info__label">Start Year</p>
                                <p className="info__value">2000</p>
                            </div>
                            <div className="info__endYear info__item">
                                <p className="info__label">End Year</p>
                                <p className="info__value">2005</p>
                            </div>
                        </div>
                        <div className="company__edit">l</div>
                        <div className="company__delete">t</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.getUser.company,
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
