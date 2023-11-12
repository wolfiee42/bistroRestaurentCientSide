import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover";
import MenuSection from "../../../Shared/MenuSection";

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuSection key={item._id} item={item}></MenuSection>)
                }
            </div>
            {title && <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 my-4">Order Now</button>
            </Link>}
        </div>
    );
};

export default MenuCategory;