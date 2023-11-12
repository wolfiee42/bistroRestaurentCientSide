import FoodSection from "../../../Components/Food Section/FoodSection";

const Ordertab = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-x-10">
            {
                item.map(item => <FoodSection key={item._id} item={item} ></FoodSection>)
            }
        </div>
    );
};

export default Ordertab;