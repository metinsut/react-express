import React, { Component } from "react";
import CompanyFormComponent from "./companyFormComponent";

class CreateCompanyItem extends Component {
      newCompany = React.createRef();

      // componentDidUpdate(prevProps, prevState) {
      //       this.props.editProcess === true ? this.addNewCompany() : null;
      // }

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
                        <div
                              ref={this.newCompany}
                              className="new__acompany__form"
                        >
                              <CompanyFormComponent
                                    type="create"
                                    onSaveData={this.props.onSaveData}
                              />
                        </div>
                  </div>
            );
      }
}

export default CreateCompanyItem;
