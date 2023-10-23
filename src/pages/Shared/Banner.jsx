

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mcKDqr9/green-cover-8.jpg)' }}>
                <div className="hero-overlay bg-lime-200 bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex-col">
                        <div>
                            <img className="bg-amber-200 bg-opacity-40 p-10" src="https://i.ibb.co/S7n9jgQ/frag.jpg" alt="" />
                        </div>
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-green-700 font-extrabold">Evergreen</h1>
                            <p className="mb-3 text-4xl text-orange-500 font-bold">Cosmetics and Beauty</p>
                            <p className="mb-3 text-3xl text-amber-500 font-bold">Get the skin you want to feel</p>
                            <p className="text-2xl text-orange-500 font-medium">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;