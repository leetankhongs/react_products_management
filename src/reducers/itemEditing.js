import * as types from './../constants/actionTypes';

var initialState = {};
const productEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_EDITING:
            return action.product;
        default:
            return state;
    }
}

export default productEditing;