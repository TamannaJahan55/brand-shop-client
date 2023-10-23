import { useLoaderData } from "react-router-dom";
import TrendCard from "./TrendCard";


const Trending = () => {
    const trends = useLoaderData();
    console.log(trends);

    return (
        <div>
            <div className="bg-orange-100">
                <div className="mx-10">
                    <h2 className="text-5xl font-bold text-center text-green-700 mb-5">Trending Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            trends.map(trendProduct => <TrendCard key={trendProduct.id} trendProduct={trendProduct}></TrendCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;