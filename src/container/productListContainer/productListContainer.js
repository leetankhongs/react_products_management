import React, { Component } from 'react';
import ProductList from './../../components/productList/productList'
import ProductItem from './../../components/productItem/productItem'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'


class ProductListContainer extends Component {
    componentDidMount() {
        this.props.fetchAllProduct();

    }

    onDelete = (id) => {
        this.props.deleteProduct(id);
    }
    
    render() {
        var { products } = this.props;
        return (
            <ProductList>
                {this.showProductItemList(products)}
            </ProductList>
        );
    }

    showProductItemList = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
            })
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        deleteProduct: (id) => {
            dispatch(actions.actDeleteProductRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
