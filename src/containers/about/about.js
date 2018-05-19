import React, { Component } from "react";
import { connect } from "react-redux";
import { IMAGE } from "../../constants/path";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class About extends Component {
    slideIndex = 0;

    slide = n => {
        this.slideIndex =
            this.slideIndex === 0 && n < 0
                ? this.props.site.images.length - 1
                : (this.slideIndex + n) % this.props.site.images.length;
        this.forceUpdate();
    };

    render() {
        const site = this.props.site;
        return (
            <React.Fragment>
                {site && (
                    <section className="about-root">
                        <article className="info-container">
                            <h3>{site.title}</h3>
                            <h6>{site.desc}</h6>
                        </article>

                        <article className="slide-container">
                            <div className="slide-block">
                                <div className="button-item">
                                    <div
                                        className="icon-item"
                                        onClick={() => {
                                            this.slide(-1);
                                        }}
                                    >
                                        ğ
                                    </div>
                                </div>

                                {site
                                    ? site.images.map((item, key) => (
                                          <TransitionGroup key={key}>
                                              {this.slideIndex === key && (
                                                  <CSSTransition
                                                      timeout={1000}
                                                      classNames="fade"
                                                  >
                                                      <div className="image-item">
                                                          <img
                                                              src={`${IMAGE +
                                                                  item.url}`}
                                                              alt="asd"
                                                          />
                                                          <p>{item.name}</p>
                                                      </div>
                                                  </CSSTransition>
                                              )}
                                          </TransitionGroup>
                                      ))
                                    : null}

                                <div
                                    className="button-item"
                                    onClick={() => {
                                        this.slide(1);
                                    }}
                                >
                                    <div className="icon-item">I</div>
                                </div>
                            </div>
                        </article>
                    </section>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.siteLang && state.siteLang.lang,
    site: state.siteLayout[state.siteLang.lang]
        ? state.siteLayout[state.siteLang.lang].about
        : null
});

export default connect(mapStateToProps)(About);
