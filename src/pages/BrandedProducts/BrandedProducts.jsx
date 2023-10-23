import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const BrandedProducts = () => {
    const brandedProducts = useLoaderData();
    console.log(brandedProducts)
    const { brand_name } = useParams();
    console.log(brand_name);
    const brands = brandedProducts.filter(brands => brands.brand_name === brand_name);
    console.log(brands);

    return (
        <div className="lg:p-16" style={{ backgroundImage: 'url(https://i.ibb.co/g9xdKZh/green-cover.jpg)' }}>
            <div className="bg-lime-200 bg-opacity-40 p-10">
                <div className="carousel w-full h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/PQGxPv1/loreal-ad-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/kMyjKMW/astee-lauder-ad-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/zHy8XJS/chanel-ad-4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/yy5vJZt/UD-ad-4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <h2 className="text-5xl text-center font-extrabold text-green-700 mt-5">Branded Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        brandedProducts.map(products => <ProductsCard key={products} products={products}></ProductsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandedProducts;