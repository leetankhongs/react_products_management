import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
const menu = [
    {
        label: 'Trang chủ',
        to: '/react_products_management/',
        activeOnlyWhenExect: true
    },
    {
        label: 'Danh sách sản phẩm',
        to: '/react_products_management/products',
        activeOnlyWhenExect: false
    },
]
class Menu extends Component {
    render() {
        return (
            <div >
                <div className="navbar navbar-default">
                    <p className="navbar-brand" >CALL API</p>
                    <ul className="nav navbar-nav">
                        {this.showMenu(menu)}
                    </ul>
                </div>
                
            </div>
        );
    }

    showMenu = (menu) =>{
        var result = null;

        if(menu.length > 0){
            result = menu.map((item, index) =>{
                return <MenuLink key = {index} label = {item.label} to = {item.to} activeOnlyWhenExect = {item.activeOnlyWhenExect}/>
            })
        }

        return result;
    }
    

}


const MenuLink = ({ label, to, activeOnlyWhenExect = false }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExect} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}


export default Menu;
