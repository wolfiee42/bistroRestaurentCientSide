import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactUs from "../Contact Us/ContactUs";
import FeaturedItem from "../FeatuedItem/FeaturedItem";
import FeaturedItem2 from "../FeatuedItem/FeaturedItem2";
import PopularMenu from "../Popular menu/PopularMenu";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <FeaturedItem2></FeaturedItem2>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <FeaturedItem></FeaturedItem>
            <Review></Review>
        </div>
    );
};

export default Home;