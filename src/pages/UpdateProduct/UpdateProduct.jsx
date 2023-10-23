import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);

    const { _id, product_photo, product_name, brand_name, brand_photo, short_description, type, price, rating, adPhoto } = productDetails;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const product_photo = form.product_photo.value;
        const product_name = form.product_name.value;
        const brand_name = form.brand_name.value;
        const brand_photo = form.brand_photo.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const adPhoto = form.adPhoto.value;
        const rating = form.rating.value;

        const updatedProduct = { product_photo, product_name, brand_name, brand_photo, type, price, short_description, adPhoto, rating }
        console.log(updatedProduct);

        // send data to the server
        fetch(`https://brand-shop-server-six-rho.vercel.app/products/${brand_name}/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="p-24" style={{ backgroundImage: 'url(https://i.ibb.co/g9xdKZh/green-cover.jpg)' }}>
                <h2 className="text-5xl text-center text-orange-500 font-extrabold mb-4">Update a Product: {product_name}</h2>
                <div className="p-10 bg-lime-200 bg-opacity-40 border border-green-700 rounded">
                    <form onSubmit={handleUpdateProduct}>
                        {/* product img url */}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product image URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="product_photo" defaultValue={product_photo} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>
                        {/* product name row */}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="product_name" defaultValue={product_name} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>
                        {/* brand names row*/}
                        <div className="md:flex mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <div className="form-control">
                                    <div className="input-group">
                                        <select defaultValue={brand_name} name="brand_name" className="select select-bordered w-full bg-amber-400">
                                            <option disabled selected>Pick Brand</option>
                                            <option defaultValue="LOreal">LOreal</option>
                                            <option defaultValue="Estée Lauder">Estée Lauder</option>
                                            <option defaultValue="Chanel">Chanel</option>
                                            <option defaultValue="Urban Decay">Urban Decay</option>
                                            <option defaultValue="Procter & Gamble">Procter & Gamble</option>
                                            <option defaultValue="Avon">Avon</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* brand img url */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Image URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand_photo" defaultValue={brand_photo} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>
                        {/* type and price row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" defaultValue={type} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" defaultValue={price} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>
                        {/* description row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="short_description" defaultValue={short_description} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>
                        {/* advertisement image and rating row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Advertisement Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="adPhoto" defaultValue={adPhoto} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Rating 1-5</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full bg-amber-400" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Product" className="btn btn-block bg-green-700 text-white normal-case" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;