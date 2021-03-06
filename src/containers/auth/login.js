import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/index";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    error = null;

    componentDidMount() {
        window.onclick = event => {
            if (event.target === this.modal) {
                this.props.history.goBack();
            }
        };
    }

    close = () => {
        this.props.history.goBack();
    };

    submit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.props.history.goBack();
    };

    email = e => {
        this.setState({
            email: e.target.value
        });
    };

    password = e => {
        this.setState({
            password: e.target.value
        });
    };

    render() {
        return (
            <section
                className="auth__root"
                ref={root => {
                    this.modal = root;
                }}
            >
                <article className="auth__block">
                    <div className="auth__header">
                        <h1 className="header__title">LOG IN</h1>
                        <div className="header__exit" onClick={this.close}>
                            t
                        </div>
                    </div>
                    <form onSubmit={this.submit} className="auth__form">
                        <div className="form__input email">
                            <label htmlFor="email">
                                <div className="input__title">Email</div>
                                <input
                                    className="input"
                                    name="email"
                                    type="text"
                                    id="email"
                                    onChange={this.email}
                                />
                            </label>
                            {this.props.result.code && (
                                <div className="input__warning">
                                    Email error
                                </div>
                            )}
                        </div>
                        <div className="form__input password">
                            <label htmlFor="password">
                                <div className="input__title">Password</div>
                                <input
                                    className="input"
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.password}
                                />
                            </label>
                            {false ? (
                                <div className="input__warning">
                                    Password lenght must be bigget then 6
                                </div>
                            ) : (
                                <div />
                            )}
                        </div>
                        <div className="form__submit">
                            <input type="submit" value="SEND" />
                        </div>
                    </form>
                </article>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        result: state.formResult
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: data => {
            dispatch(login(data));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
