import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage/>
    },
    {
        path: '/products',
        exact: true,
        main: ()=> <ProductListPage/>
    },
    {
        path: '/products/add',
        exact: false,
        main: ({history})=> <ProductActionPage history = {history}/>
    },
    {
        path: '/products/edit',
        exact: false,
        main: ({location,history})=> <ProductActionPage history = {history} location = {location}/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFoundPage/>
    }
]

export default routes;