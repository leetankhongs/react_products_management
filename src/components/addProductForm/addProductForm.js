import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
class AddProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            status: false
        }


    }

    onChangeValue = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: this.state.id,
            name: this.state.txtName,
            price: this.state.txtPrice,
            status: this.state.status
        })

    }

    componentWillReceiveProps(nextProps){
        var {product} = nextProps;
        if(product){
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                status: product.status
            })
        }
    }
    render() {
        var { txtName, txtPrice, status } = this.state;

        return (

            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <legend>Thêm sản phẩm</legend>

                        <div className="form-group">
                            <label >Tên sản phẩm</label>
                            <input type="text" className="form-control"
                                name='txtName'
                                value={txtName}
                                onChange={this.onChangeValue} />
                        </div>

                        <div className="form-group">
                            <label >Giá</label>
                            <input type="number" className="form-control"
                                name='txtPrice'
                                value={txtPrice}
                                onChange={this.onChangeValue} />
                        </div>

                        <div className="form-group">
                            <label >
                                <input type="checkbox"
                                    name='status'
                                    checked={status}
                                    onChange={this.onChangeValue} /> Còn hàng
                            </label>

                        </div>
                        {this.state.id !== '' ? <button className="btn btn-primary">Chỉnh sửa</button> : <button className="btn btn-primary">Thêm</button>}

                        &nbsp;&nbsp;
                        <Link to='/products' className="btn btn-danger">Hủy bỏ</Link>
                    </form>

                </div>
            </div>

        );
    }

}



const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProduct: id => {
            dispatch(actions.actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);


