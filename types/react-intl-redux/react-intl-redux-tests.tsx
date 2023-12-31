import * as React from "react";
import { render } from "react-dom";
import { IntlAction, IntlProvider, intlReducer, IntlState, Provider, updateIntl } from "react-intl-redux";
import { createStore } from "redux";

var action: IntlAction = updateIntl({ locale: "en", messages: {} });
var state: IntlState = intlReducer({ locale: "en", messages: {} }, action);

render(
    <IntlProvider locale="en">
        <div>Test</div>
    </IntlProvider>,
    document.getElementById("main"),
);

render(
    <Provider store={createStore(intlReducer)}>
        <div>Test</div>
    </Provider>,
    document.getElementById("main"),
);
