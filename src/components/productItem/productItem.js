import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ProductItem extends Component {
    
    onDelete = () =>{
        if(confirm("Bạn có muốn xóa sản phẩm này không?")) //eslint-disable-line
            this.props.onDelete(this.props.product.id)
    }
    
    getProduct = (id)=>{
        this.props.editProduct(this.props.product.id)
    }
    render() {
        var {product, index} = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {product.status ? <span className="label label-success">Còn hàng</span> : <span className="label label-warning">Hết hàng</span>}

                </td>
                <td>

                    <Link to = {'products/edit?id=' + product.id} className="btn btn-success" >Chỉnh sửa</Link>
                                  &nbsp; &nbsp;
                    <button type="button" className="btn btn-danger" onClick = {this.onDelete}>Xóa</button>

                </td>
            </tr>

        );
    }

}

export default ProductItem;
