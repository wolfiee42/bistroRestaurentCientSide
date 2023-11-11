const MenuSection = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[100px] h-[80px]" src={image} alt="" />
            <div className="flex flex-col justify-between">
                <h3 className="uppercase">{name}  -----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuSection;