

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/bF90gHk/green-cover.jpg)' }}>
                <div className="hero-overlay bg-lime-200 bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-green-700 font-extrabold">Evergreen</h1>
                        <p className="mb-3 text-4xl text-orange-500 font-bold">Get the skin you want to feel</p>
                        <p className="text-2xl text-lime-600 font-medium">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;