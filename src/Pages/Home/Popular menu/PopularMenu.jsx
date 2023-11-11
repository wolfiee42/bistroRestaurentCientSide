import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuSection from "../../../Shared/MenuSection";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular");
                setMenu(popularItem);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle
                subTitle="---Check it out---"
                title="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuSection key={item._id} item={item}></MenuSection>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;