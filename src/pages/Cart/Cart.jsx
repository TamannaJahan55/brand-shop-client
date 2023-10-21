// import { useLoaderData, useParams } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import CartDetails from "./CartDetails";


const Cart = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user?.email}`)
        .then(res => res.json())
        .then(data => setCartItems(data))
    }
        , [user?.email])

        
    return (
        <div>
            <div className="bg-orange-50">
                <div className="mx-10">
                    <h2 className="text-5xl font-bold text-center text-green-700 mb-5">My Cart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        {
                            cartItems.map(cartItem => <CartDetails key={cartItem._id} cartItem={cartItem}></CartDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;