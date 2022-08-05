import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts: productReducer,
    product: selectedProductReducer
})

export default reducers;