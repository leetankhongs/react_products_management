import * as types from './../constants/actionTypes';
import _ from 'lodash';
var initialState = [];



const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = _.findIndex(state, (product) => product.id === action.id)

            if (index !== -1) {
                state.splice(index, 1);
            }

            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]

        case types.EDIT_PRODUCT:
            index = _.findIndex(state, (product) => product.id === action.product.id)
            console.log(index)

            if (index !== -1)
            {
                state[index] = action.product;
            }
                

            return [...state];
        default:
            return state;
    }
}

export default products;