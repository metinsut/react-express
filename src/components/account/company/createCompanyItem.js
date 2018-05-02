import React, { Component } from "react";
import CompanyFormComponent from "./companyFormComponent";

class CreateCompanyItem extends Component {
      ownEdit = false;

      toogleEdit = () => {
            this.props.toggleEditProcess();
            this.ownEdit = !this.ownEdit;
            console.log(this.ownEdit);
            console.log(this.props.editProcess);
      };

      componentDidUpdate(prevProps) {
            if (prevProps.editProcess === false) {
                  this.ownEdit = !this.ownEdit;
            }
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
            if (prevProps.editProcess === true) {
                  // this.props.toggleEditProcess();
            }
            return null;
      }

      render() {
            return (
                  <div className="company__create__new__root">
                        <div
                              onClick={this.toogleEdit}
                              className="company__create__new"
                        >
                              <p>Add New Company</p>
                              <div className="add__new">
                                    <div className="add__icon">z</div>
                              </div>
                        </div>
                        {this.ownEdit === true ? (
                              <div className="new__acompany__form">
                                    <CompanyFormComponent
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
