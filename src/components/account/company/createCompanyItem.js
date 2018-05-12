import React, { Component } from "react";
import CompanyFormComponent from "./companyFormComponent";

class CreateCompanyItem extends Component {
      render() {
            return (
                  <div className="company__create__new__root">
                        <div
                              onClick={() => this.props.toggleEditProcess(-1)}
                              className="company__create__new"
                        >
                              <p>Add New Company</p>
                              <div className="add__new">
                                    <div className="add__icon">z</div>
                              </div>
                        </div>
                        {this.props.dinamicKey === -1 ? (
                              <div className="new__acompany__form">
                                    <CompanyFormComponent
                                          form={`company${-1}`}
                                          formKey={-1}
                                          type="create"
                                          onSaveData={this.props.onSaveData}
                                    />
                              </div>
                        ) : (
                              <div />
                        )}
                  </div>
            );
      }
}

export default CreateCompanyItem;
