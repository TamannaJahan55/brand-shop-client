// import { useLoaderData, useParams } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import CartDetails from "./CartDetails";


const Cart = () => {
    const {user} = useContext(AuthContext);
    console.log(user.displayName);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://brand-shop-server-six-rho.vercel.app/cart/${user?.email}`)
        .then(res => res.json())
        .then(data => setCartItems(data))
    }
        , [user?.email])

        
    return (
        <div>
            <div className="md:p-14 lg:p-24" style={{ backgroundImage: 'url(https://i.ibb.co/g9xdKZh/green-cover.jpg)' }}>
            <h2 className="text-5xl text-center text-green-700 font-extrabold mb-4">My Cart</h2>
                <div className="p-10 bg-lime-200 bg-opacity-40 border border-green-700 rounded">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        {
                            cartItems.map(cartItem => <CartDetails key={cartItem._id} cartItem={cartItem} cartItems={cartItems} setCartItems={setCartItems}></CartDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;