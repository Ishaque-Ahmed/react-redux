import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers/index';
import { devToolsEnhancer } from "redux-devtools-extension";

const store = configureStore(
    { reducer: reducers, },
    {},

);

export default store;