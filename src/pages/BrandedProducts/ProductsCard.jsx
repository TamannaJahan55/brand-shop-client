

const ProductsCard = ({products}) => {

    const {_id, product_photo, product_name, brand_id, brand_name, brand_photo, type, price, adPhoto, rating} = products;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={product_photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{brand_id}{brand_name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;