import './App.css';
import React from "react";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import BodyContainer from "./components/Body/BodyContainer";

export const App = () => {
    return (
                <div className="App">
                    <HeaderContainer/>
                    <BodyContainer/>
                </div>
    )
}

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default AppContainer;