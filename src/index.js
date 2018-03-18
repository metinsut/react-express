import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import reducer from "./reducers";
import "./static/css/main.css";
import App from "./containers/app";
import { getLang } from "./actions/index";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
      middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getLang("tr"));

const AppClient = () => (
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
);

ReactDOM.render(<AppClient />, document.getElementById("root"));
