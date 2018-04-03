import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getAccount } from "../../actions/index";
import Authentication from "../../components/authentication/authentication";
import inputComponent from "../../components/forms/input";

const validate = values => {
   const errors = {};
   return errors;
};

class Account extends React.Component {
   componentDidMount() {
      const token = localStorage.getItem("userToken");
      this.props.dispatch(getAccount(token));
   }

   render() {
      // let account = this.props.account;
      const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
         <Authentication history={this.props.history}>
            <section className="account__root">
               <div className="account__title">
                  <h1>YOUR PROFILE</h1>
               </div>

               <form onSubmit={handleSubmit(this.props.onSaveData)}>
                  <Field name="name" component={inputComponent} />
                  <Field name="email" component={inputComponent} />
                  <Field name="bio" component={inputComponent} />
                  <button
                     type="button"
                     disabled={pristine || submitting}
                     onClick={reset}
                  >
                     Clear Values
                  </button>
               </form>
            </section>
         </Authentication>
      );
   }
}

const mapStateToProps = state => {
   return {
      account: state.getUser,
      isLogin: state.statusLogin
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onSaveData: data => {
         console.log(data);
      }
   };
};

Account = connect(mapStateToProps,mapDispatchToProps)(Account);
export default reduxForm({ form: "account", validate })(Account);

// export default compose(
//    reduxForm({
//       form: "account",
//       validate
//    }),
//    connect(mapStateToProps, mapDispatchToProps)
// )(Account);
