import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getAccount } from "../../actions/index";
import Authentication from "../../components/authentication/authentication";
import inputComponent from "../../components/forms/input";

const validate = values => {
   let errors = {};
   if (
      !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
         values.email
      )
   ) {
      errors.email = "email_match";
   }

   if (!values.email || values.email.trim() === "") {
      errors.email = "email_required";
   }
   if (!values.name || values.name.trim() === "") {
      errors.name = "name_required";
   }

   return errors;
};

class Account extends React.Component {
   componentDidMount() {
      const token = localStorage.getItem("userToken");
      this.props.dispatch(getAccount(token));
   }

   render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;

      return (
         <Authentication
            history={this.props.history}
            isLogin={this.props.isLogin}
         >
            <section className="account__root">
               <div className="account__title">
                  <h1>YOUR PROFILE</h1>
               </div>

               <form onSubmit={handleSubmit(this.props.onSaveData)}>
                  <Field
                     name="email"
                     type="email"
                     label="email"
                     component={inputComponent}
                  />
                  <Field
                     name="name"
                     type="text"
                     label="name"
                     component={inputComponent}
                  />
                  <Field
                     name="bio"
                     type="text"
                     label="bio"
                     component={inputComponent}
                  />
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
      isLogin: state.statusLogin.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onSaveData: data => {
         console.log(data);
      }
   };
};

Account = connect(mapStateToProps, mapDispatchToProps)(Account);
export default reduxForm({ form: "account", validate })(Account);

// export default compose(
//    reduxForm({
//       form: "account",
//       validate
//    }),
//    connect(mapStateToProps, mapDispatchToProps)
// )(Account);
