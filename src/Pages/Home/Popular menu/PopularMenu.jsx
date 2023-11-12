import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuSection from "../../../Shared/MenuSection";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItem = menu.filter(item=>item.category === "popular")

    return (
        <div className="max-w-7xl mx-auto my-10">
            <SectionTitle
                subTitle="---Check it out---"
                title="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItem.map(item => <MenuSection key={item._id} item={item}></MenuSection>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;