import React, { Component } from 'react';
import AddProductForm from '../../components/addProductForm/addProductForm'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'

class AddProductFormContainer extends Component {
    onSubmit = (product) => {
        var { history } = this.props;

        if (product.id !== '') {
            this.props.editProduct(product);
        }
        else {
            this.props.addProduct(product);

        }

        history.goBack();
    }

    componentDidMount() {
        if (this.props.location) {
            var id = new URLSearchParams(this.props.location.search).get('id');
            this.props.getProduct(id);
        }

    }

    render() {

        var { itemEditing } = this.props;

        if (itemEditing) return <AddProductForm onSubmit={this.onSubmit} location={this.props.location} product={itemEditing} />
        else
            return (
                <AddProductForm onSubmit={this.onSubmit} location={this.props.location} />
            );
    }


}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: product => {
            dispatch(actions.actAddProductRequest(product));
        },
        editProduct: product => {
            dispatch(actions.actEditProductRequest(product));
        },
        getProduct: id => {
            dispatch(actions.actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductFormContainer);

