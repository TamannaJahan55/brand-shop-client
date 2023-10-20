import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { id, brand_name, brand_image } = brand;
    return (
        <Link to={`/brandedProducts/${brand_name}`}>
            <div className="card card-compact h-96 bg-lime-200 shadow-xl shadow-orange-50">
                <figure><img src={brand_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-orange-500">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;