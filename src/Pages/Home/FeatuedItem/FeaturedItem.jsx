import SectionTitle from "../../../Components/Section Title/SectionTitle";
import image from "../../../assets/home/featured.jpg"
import "./featured.css"


const FeaturedItem = () => {
    return (
        <div className="max-w-7xl mx-auto featuredItem bg-fixed pt-2 my-20 text-white">
            <SectionTitle
                subTitle="---Check it out---"
                title="FROM OUR MENU"
            ></SectionTitle>

            <div className="flex gap-10 justify-center items-center px-20 py-10 ">
                <div className="w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <h2>March 20, 2023</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta eius totam magnam obcaecati, cumque sit ab doloremque assumenda ratione praesentium non odit sunt autem aperiam dolorem ad vitae dolorum!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;