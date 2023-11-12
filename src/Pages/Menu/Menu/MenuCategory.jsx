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
        </div>
    );
};

export default MenuCategory;