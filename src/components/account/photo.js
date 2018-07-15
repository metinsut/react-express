import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
// import renderFile from "../../components/forms/renderFile";
import { uploadFile } from '../../actions/index';

class Photo extends React.Component {
     uploadFile = e => {};

     run = e => {
          let file = e.target.files[0];
          this.props.onSaveData(file);
     };

     render() {
          // const { handleSubmit, pristine, reset, submitting } = this.props;
          return (
               <div className="profile__root">
                    <div className="account__title">
                         <h1>YOUR PROFILE</h1>
                    </div>

                    {/* <form onSubmit={handleSubmit(this.props.onSaveData)}>
                    <Field
                        name="file"
                        type="file"
                        label="File"
                        component={renderFile}
                    />

                    <div className="button__block">
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                        >
                            Clear Values
                        </button>
                        <button type="submit" disabled={submitting}>
                            SEND
                        </button>
                    </div>
                </form> */}

                    <form action="" onSubmit={this.uploadFile}>
                         <div className="file__root">
                              <label>
                                   <input type="file" onChange={this.run} />
                                   <div className="icon">i</div>
                                   <p className="file">Upload an Image</p>
                              </label>
                              <input
                                   type="submit"
                                   value="SAVE"
                                   style={{ margin: '10px', padding: '10px' }}
                              />
                         </div>
                    </form>
               </div>
          );
     }
}

const mapStateToProps = state => {
     return {
          account: state.getUser
     };
};

const mapDispatchToProps = dispatch => {
     return {
          onSaveData: data => {
               dispatch(uploadFile(data));
          }
     };
};

Photo = connect(
     mapStateToProps,
     mapDispatchToProps
)(Photo);
export default reduxForm({ form: 'image' })(Photo);

// export default(Photo)
