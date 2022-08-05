import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { setProducts } from '../redux/actions/ProductActions';
import axios from 'axios';

const AllProducts = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = axios
            .get('https://fakestoreapi.com/products')
            .then((response) => dispatch(setProducts(response.data)))
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    //console.log("products:", products);

    return (
        <div className='my-10'>
            <div className=''>
                <Product />
            </div>

        </div>
    )
}

export default AllProducts;