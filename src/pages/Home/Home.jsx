import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";
import BrandCard from "./BrandCard";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <div className="mx-10 my-20">
                    <h2 className="text-5xl font-bold text-center text-green-700 mb-5">Our Brands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;