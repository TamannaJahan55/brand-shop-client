import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const ProductDetail = () => {
    
    const {user} = useContext(AuthContext);
    console.log(user);
    const productDetails = useLoaderData();
    console.log(productDetails);
    const { _id, product_photo, product_name, brand_name, brand_photo, short_description, type, price, rating } = productDetails;

    const handleAddToCart = event => {
        event.preventDefault();

        const cartProduct = { product_photo, product_name, brand_name, brand_photo, type, price, short_description, rating, email: user?.email }
        console.log(cartProduct);
    

    // send data to the server
    fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cartProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added to cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div>
            <div className="p-24" style={{ backgroundImage: 'url(https://i.ibb.co/g9xdKZh/green-cover.jpg)' }}>
                <h2 className="text-3xl text-center text-green-700 font-extrabold mb-4">Product Details</h2>
                <div className="p-10 bg-lime-200 bg-opacity-40 border border-green-700 rounded">
                    <div className="max-w-6xl mx-10 md:mx-40 lg:mx-40 ">
                        <div className="box-content rounded-lg w-full bg-amber-400 shadow-xl shadow-violet-300">
                            <figure className="px-20 pt-10">
                                <img src={product_photo} alt="Shoes" className="w-full rounded-xl border border-green-700" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-semibold text-green-700">{product_name}</h2>
                                <img className="w-1/5 rounded-full" src={brand_photo} alt="" />
                                <p className="text-xl font-normal">{short_description}</p>
                                <p className="text-xl font-medium text-orange-500">Type: {type}</p>
                                <p className="text-lg font-medium">Price: <span>$</span> {price}</p>
                                <div className="card-actions">
                                    
                                        <button onClick={handleAddToCart} className="btn text-white normal-case bg-green-700"><span><AiOutlineShoppingCart></AiOutlineShoppingCart></span>Add to Cart</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;