import React, { Component } from "react";
import { connect } from "react-redux";
import {
    updateCompany,
    editCompany,
    deleteCompany
} from "../../../actions/index";
import CreateCompanyItem from "./createCompanyItem";
import EditCompanyList from "./editCompanyList";
import Helper from "../../../helper/helper";

class Company extends Component {
    dinamicKey = null;

    toggleEditProcess = key => {
        if (key === this.dinamicKey) {
            this.dinamicKey = null;
            this.forceUpdate();
        } else {
            this.dinamicKey = key;
            this.forceUpdate();
        }
    };

    onSaveData = data => {
        const uuid = Helper.guid;
        const company = { ...data, ...{ id: uuid } };
        this.props.saveDataCompany(company);
    };
    onEditData = data => {
        this.props.editDataCompany(data);
    };
    onDeleteData = data => {
        this.props.deleteDataCompany(data);
    };

    render() {
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>
                <div className="company__root">
                    <CreateCompanyItem
                        onSaveData={this.onSaveData}
                        dinamicKey={this.dinamicKey}
                        toggleEditProcess={this.toggleEditProcess}
                    />

                    {this.props.company &&
                        this.props.company.map((item, key) => {
                            return (
                                <EditCompanyList
                                    key={key}
                                    staticKey={key}
                                    dinamicKey={this.dinamicKey}
                                    company={item}
                                    toggleEditProcess={this.toggleEditProcess}
                                    onEditData={this.onEditData}
                                    onDeleteData={this.onDeleteData}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.getUser.company
    };
};

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        saveDataCompany: data => {
            const token = localStorage.getItem("userToken");
            dispatch(
                updateCompany({
                    ...{ company: data },
                    ...{ token: token }
                })
            );
        },
        editDataCompany: data => {
            const token = localStorage.getItem("userToken");
            dispatch(
                editCompany({
                    ...{ company: data },
                    ...{ token: token }
                })
            );
        },
        deleteDataCompany: data => {
            const token = localStorage.getItem("userToken");
            dispatch(
                deleteCompany({
                    ...{ id: data },
                    ...{ token: token }
                })
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
