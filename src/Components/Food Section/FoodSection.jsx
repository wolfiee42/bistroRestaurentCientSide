const FoodSection = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure><img src={image} alt={name} /></figure>
            <p className="bg-black text-white absolute right-4 top-3 rounded-md px-3 py-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;