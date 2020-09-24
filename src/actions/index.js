import * as types from './../constants/actionTypes';
import APICaller from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return APICaller('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return APICaller('products/' + id, 'DELETE', null).then(res => {
            if (res.status === 200) {
                dispatch(actDeleteProduct(id));
            }
        })
    }
}

const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return APICaller('products', 'POST', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const actEditProductRequest = (product) => {
    return dispatch => {
        return APICaller('products/' + product.id, 'PUT', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            dispatch(actEditProduct(product));
        })
    }
}

const actEditProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return APICaller('products/' + id, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
}

const actGetProduct = (product) => {
    return {
        type: types.GET_PRODUCT_EDITING,
        product
    }
}