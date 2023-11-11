import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeatuedItem/FeaturedItem";
import PopularMenu from "../Popular menu/PopularMenu";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Review></Review>
        </div>
    );
};

export default Home;