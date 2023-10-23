import { AiTwotoneDelete} from 'react-icons/ai';
import Swal from 'sweetalert2';

const CartDetails = ({ cartItem, cartItems, setCartItems }) => {

    const { _id, product_photo, product_name, brand_name, brand_photo, type, price, short_description, rating, email } = cartItem;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/cart/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    setCartItems();
                    Swal.fire(
                        'Deleted!',
                        'Your cart product has been deleted.',
                        'success'
                      )
                    const remaining = cartItems.filter(cartItem => cartItem._id !== _id);
                    setCartItems(remaining);
                }
            })
            }
          })
    }
    return (
        <div>
            <div className="mt-5">
            <div className="card w-full h-80 card-side bg-amber-400 shadow-xl">
                    <figure><img className="h-96 md:h-80 lg:h-80" src={product_photo} alt="Movie" /></figure>
                    <div className="card-body w-3/5 md:w-full lg:w-full">
                        <h2 className="text-sm font-medium md:card-title lg:card-title">{product_name}</h2>
                        <p className="text-sm md:text-2xl lg:text-2xl font-medium text-green-700">{brand_name}</p>
                        <p className="text-sm md:text-xl lg:text-xl text-orange-700 font-medium">{type}</p>
                        <p className="text-sm md:text-lg lg:text-lg font-medium">Price: <span>$</span>{price}</p>
                        <p className="text-xs md:text-lg lg:text-lg font-medium">User Email: {email}</p>
                        <div className="card-actions justify-end">
                            <div className="join">
                                <button onClick={() => handleDelete(_id)} className="btn bg-red-500 join-item text-white"><span><AiTwotoneDelete></AiTwotoneDelete></span>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;