

const Trending = () => {
    return (
        <div className="my-5">
            <h2 className="text-4xl text-green-700 text-center mb-5 font-extrabold">Trending Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card card-compact h-96 bg-amber-400 shadow-xl shadow-lime-200">
                    <figure><img src="https://i.ibb.co/dmcY919/Body-Wash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl text-green-700 font-semibold">Body Washes</h2>
                    </div>
                </div>
                <div className="card card-compact h-96 bg-amber-400 shadow-xl shadow-lime-200">
                    <figure><img src="https://i.ibb.co/8Yz3w90/Sun-Protection.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl text-green-700 font-semibold">Sun Protection</h2>
                    </div>
                </div>
                <div className="card card-compact h-96 bg-amber-400 shadow-xl shadow-lime-200">
                    <figure><img src="https://i.ibb.co/gjMWywx/fragrance.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl text-green-700 font-semibold">Fragrance</h2>
                    </div>
                </div>
                <div className="card card-compact h-96 bg-amber-400 shadow-xl shadow-lime-200">
                    <figure><img src="https://i.ibb.co/mh4Nh2P/Serum.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl text-green-700 font-semibold">Serum</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;