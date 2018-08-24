import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/index';

class Photo extends React.Component {
    file = null;
    uploadFile = e => {
        e.preventDefault();
        if (this.file !== null) {
            this.props.onSaveData(this.file);
        }
    };

    run = e => {
        this.file = e.target.files[0];
        var output = document.getElementById('img');
        output.src = URL.createObjectURL(this.file);
        this.forceUpdate();
    };

    render() {
        let { acc } = this.props.account;
        console.log(acc)
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>

                <form action="" onSubmit={this.uploadFile}>
                    <div className="file__root">
                        <label>
                            <input type="file" onChange={this.run} multiple name="photo" />
                            <div className="icon">i</div>
                            <p className="file">Upload an Image</p>
                        </label>
                        <button type="submit">
                            SEND
                        </button>
                    </div>
                    <div className="image-items">
                        <img style={{ height: "100px", width: "100px", padding: "10px" }} src="" alt="" id="img" />
                    </div>
                </form>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.getAcc ? state.getAcc : null,
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
export default Photo;