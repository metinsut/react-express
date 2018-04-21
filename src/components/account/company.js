import { connect } from "react-redux";
import { updateCompany } from "../../actions/index";
import CompanyComponent from "../../components/account/companyComponent";

const mapStateToProps = state => {
      return {
            account: state.getUser,
            initialValues:{stillWork:false}
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyComponent);
