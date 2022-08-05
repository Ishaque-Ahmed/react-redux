import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.allproducts.products)
    const productLists = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Link to={`/product/${id}`}>
                <div
                    key={id}
                    className="card card-compact w-64 bg-base-100 h-96 shadow-lg hover:shadow-slate-800">
                    <figure><img src={image} alt="Shoes" className='w-36 h-36 pt-2' /></figure>
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p>Price: {price} Type: {category}</p>
                        <div className="card-actions justify-end items-center">
                            <button className="btn btn-primary hover:btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        );
    })


    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {productLists}
            </div>
        </div>
    )
}
export default Product;