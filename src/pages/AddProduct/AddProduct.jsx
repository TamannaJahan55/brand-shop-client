

const AddProduct = () => {

    const handleAddProduct = event => {
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

        const newProduct = { product_photo, product_name, brand_name, brand_photo, type, price, short_description, adPhoto, rating }
        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="p-24" style={{ backgroundImage: 'url(https://i.ibb.co/mcKDqr9/green-cover-8.jpg)' }}>
            <h2 className="text-3xl text-center text-orange-400 font-extrabold">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* product img url */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_photo" placeholder="Product image URL" className="input input-bordered w-full bg-lime-200" />
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
                            <input type="text" name="product_name" placeholder="Product Name" className="input input-bordered w-full bg-lime-200" />
                        </label>
                    </div>
                </div>
                {/* brand id and names */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Id</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Brand Id" className="input input-bordered w-full bg-lime-200" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full bg-lime-200" />
                            <div className="dropdown dropdown-left">
                                <label tabIndex={0} className="btn btn-ghost m-1">Brands</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>LOréal</a></li>
                                    <li><a>Estée Lauder</a></li>
                                    <li><a>Chanel</a></li>
                                    <li><a>Urban Decay</a></li>
                                    <li><a>Procter & Gamble</a></li>
                                    <li><a>Avon</a></li>
                                </ul>
                            </div>
                        </label>
                    </div>
                </div>
                {/* brand img url */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_photo" placeholder="Brand Image URL" className="input input-bordered w-full bg-lime-200" />
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
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full bg-lime-200" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full bg-lime-200" />
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
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full bg-lime-200" />
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
                            <input type="text" name="adPhoto" placeholder="Advertisement Photo URL" className="input input-bordered w-full bg-lime-200" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating 1-5</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full bg-lime-200" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block bg-lime-200" />
            </form>
        </div>
    );
};

export default AddProduct;