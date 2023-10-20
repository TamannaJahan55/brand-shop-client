import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const BrandedProducts = () => {
    const brandedProducts = useLoaderData();
    console.log(brandedProducts)
    // const { brand_name } = useParams();
    // console.log(brand_name);
    // const brands = brandedProducts.find(brands => brands.brand_name === brand_name);
    // console.log(brands);
    return (
        <div className="m-20">
            <h2 className="text-5xl text-center font-extrabold text-green-700">Branded Products {brandedProducts.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    brandedProducts.map(products => <ProductsCard key={products} products={products}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default BrandedProducts;