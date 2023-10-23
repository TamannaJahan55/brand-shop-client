import PropTypes from 'prop-types';

const TrendCard = ({trendProduct}) => {

    const {product_image, product_name} = trendProduct;
    return (
        <div>
            <div className="card card-compact h-96 bg-lime-600 shadow-xl shadow-orange-400">
                <figure><img src={product_image} alt="Shoes" /></figure>
                <div className="card-body bg-amber-400">
                    <h2 className="card-title text-3xl text-green-700  font-semibold">{product_name}</h2>
                </div>
            </div>
        </div>
    );
};

export default TrendCard;

TrendCard.propTypes = {
    trendProduct: PropTypes.object.isRequired
}