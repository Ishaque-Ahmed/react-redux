import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/ProductActions';
const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => dispatch(selectedProduct(response.data)))
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])
    //console.log(product);
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div className='text-center font-bold my-10'>Loading...</div>
            ) : (
                <div className='container mx-auto mt-5'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Album" className='w-96 h-96 p-4' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{category}</p>
                            <p>{description}</p>
                            <p>Price: {price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProductDetails;