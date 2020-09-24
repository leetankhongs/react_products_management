import React, { Component } from 'react';
import AddProductFormContainer from './../../container/addProductFormContainer/addProductFormContainer'

class ProductActionPage extends Component {
    render() {
        return (
            <AddProductFormContainer history = {this.props.history} location = {this.props.location}/>
        );
    }

}

export default ProductActionPage;
