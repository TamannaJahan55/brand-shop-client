

const CartDetails = ({ cartItem }) => {

    const { product_photo, product_name, brand_name, brand_photo, type, price, short_description, rating, email } = cartItem;
    return (
        <div>
            <div className="mt-5">
            <div className="card w-full h-80 card-side bg-amber-400 shadow-xl">
                    <figure><img className="h-80" src={product_photo} alt="Movie" /></figure>
                    <div className="card-body w-full">
                        <h2 className="card-title">{product_name}</h2>
                        <p className="text-2xl font-medium text-green-700">{brand_name}</p>
                        <p className="text-xl font-normal">{type}</p>
                        <p className="text-xl font-normal"><span>$</span>{price}</p>
                        <p className="text-xl font-normal">{email}</p>
                        <div className="card-actions justify-end">
                            <div className="join">
                                <button className="btn bg-lime-500 join-item">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;