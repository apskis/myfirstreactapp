import React from 'react';
import './App.css';
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from './Components/CreateProduct/CreateProduct';


export default function App() {
    return <div>
            <CreateProduct></CreateProduct>
            <ProductList></ProductList>
        </div>
};