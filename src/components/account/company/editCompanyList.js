import React from "react";
import CompanyFormComponent from "./companyFormComponent";

class EditCompanyList extends React.Component {
    onDeleteData = () => {
        this.props.onDeleteData(this.props.company.id);
    };

    render() {
        const company = this.props.company;
        return (
            <div className="company__item">
                {this.props.dinamicKey !== this.props.staticKey ? (
                    <div className="company__info">
                        <div className="info__name info__item">
                            <p className="info__label">Company Name</p>
                            <p className="info__value">{company.name}</p>
                        </div>
                        <div className="info__position info__item">
                            <p className="info__label">Position</p>
                            <p className="info__value">{company.position}</p>
                        </div>
                        <div className="info__startYear info__item">
                            <p className="info__label">Start Year</p>
                            <p className="info__value">{company.startYear}</p>
                        </div>
                        <div className="info__endYear info__item">
                            <p className="info__label">End Year</p>
                            <p className="info__value">{company.endYear}</p>
                        </div>
                    </div>
                ) : (
                    <CompanyFormComponent
                        onEditData={this.props.onEditData}
                        initialValues={company}
                        type={"edit"}
                    />
                )}
                <div className="company__action">
                    <div
                        className="company__edit"
                        onClick={() => this.props.toggleEditProcess(this.props.staticKey)}
                    >
                        l
                    </div>
                    <div
                        onClick={this.onDeleteData}
                        className="company__delete"
                    >
                        t
                    </div>
                </div>
            </div>
        );
    }
}
export default EditCompanyList;
