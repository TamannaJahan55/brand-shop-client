import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const BrandCard = ({ brand }) => {
    const {  brand_name, brand_image } = brand;
    return (
        <Link to={`/brandedProducts/${brand_name}`}>
            <div className="card card-compact h-96 bg-amber-400 shadow-xl shadow-lime-400 rounded-none">
                <figure><img src={brand_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-green-700 font-semibold">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}