import { GrDocumentUpdate } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const ProductsCard = ({ products }) => {

    const { _id, product_photo, product_name, brand_name, brand_photo, type, price, rating } = products;


    return (
        <div className="">
            <div className="mt-5">
                <div className="card w-full h-96 card-side bg-amber-400 shadow-xl rounded-none">
                    <figure><img className="p-4 h-96" src={product_photo} alt="Movie" /></figure>
                    <div className="card-body w-3/5 md:w-full lg:w-full">
                        <h2 className="text-lg md:card-title lg:card-title">{product_name}</h2>
                        <p className="text-sm md:text-2xl lg:text-2xl font-medium text-green-700">{brand_name}</p>
                        <p className="text-sm md:text-xl lg:text-xl font-medium text-orange-600">{type}</p>
                        <p className="text-sm md:text-lg font-medium">Price: <span>$</span>{price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-700" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-700" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-700" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-700" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-700" />
                        </div>
                        <p className="text-sm md:text-lg font-medium">Rating: {rating}</p>
                        <div className="card-actions justify-end">
                            <div className="join">
                                <Link to={`/productDetails/${_id}`}>
                                    <button className="btn bg-lime-500 join-item"><span><FcViewDetails></FcViewDetails></span>Details</button>
                                </Link>
                                <Link to={`/updateProduct/${_id}`}>
                                    <button className="btn bg-orange-500 join-item"><span><GrDocumentUpdate></GrDocumentUpdate></span>Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;