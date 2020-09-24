import React, { Component } from 'react';
import ProductListContainer from './../../container/productListContainer/productListContainer'
import {Link} from 'react-router-dom'

class ProductListPage extends Component {
 
    render() {

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to = '/products/add' className="btn btn-info">Thêm sản phẩm</Link>

                <ProductListContainer />

            </div>

        );
    }

  
}



export default ProductListPage;
