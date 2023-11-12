import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover";
import menuimg from "../../../assets/menu/banner3.jpg"



const Menu = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuimg} title={"our menu"}></Cover>
        </div>
    );
};

export default Menu;