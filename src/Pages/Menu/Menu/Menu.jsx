import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover";
import menuimg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuCategory from "./MenuCategory";
import useMenu from "../../../hooks/useMenu";



const Menu = () => {

    const [menu] = useMenu([]);
    const offered = menu.filter(item=>item.category === "offered");
    const salad = menu.filter(item=>item.category === "salad");
    const soup = menu.filter(item=>item.category === "soup");
    const pizza = menu.filter(item=>item.category === "pizza");
    const dessert = menu.filter(item=>item.category === "dessert");


    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuimg} title={"our menu"}></Cover>
            <SectionTitle subTitle="Don't Miss"  title="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory img={dessertImg} items={dessert} title="desserts"></MenuCategory>
            <MenuCategory img={pizzaImg} items={pizza} title="pizza"></MenuCategory>
            <MenuCategory img={saladImg} items={salad} title="salads"></MenuCategory>
            <MenuCategory img={soupImg} items={soup} title="soups"></MenuCategory>
        </div>
    );
};

export default Menu;