import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize, formValueSelector } from "redux-form";
import { updateCompany } from "../../../actions/index";
import RenderCheckboxSelect from "../../forms/renderCheckboxSelect";
import RenderCheckbox from "../../forms/renderCheckbox";
import RenderField from "../../forms/renderField";
import CompanyFormComponent from "./companyFormComponent";

class CreateCompanyItem extends Component {
    newCompany = React.createRef();

    addNewCompany = () => {
        this.newCompany.current.classList.toggle("open");
    };

    render() {
        return (
            <div className="company__create__new__root">
                <div
                    onClick={this.addNewCompany}
                    className="company__create__new"
                >
                    <p>Add New Company</p>
                    <div className="add__new">
                        <div className="add__icon">z</div>
                    </div>
                </div>
                <div ref={this.newCompany} className="new__acompany__form">
                    <CompanyFormComponent onSaveData={this.props.onSaveData} />
                </div>
            </div>
        );
    }
}

export default CreateCompanyItem;
