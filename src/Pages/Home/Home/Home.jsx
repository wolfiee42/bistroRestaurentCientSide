import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeatuedItem/FeaturedItem";
import FeaturedItem2 from "../FeatuedItem/FeaturedItem2";
import PopularMenu from "../Popular menu/PopularMenu";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FeaturedItem2></FeaturedItem2>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Review></Review>
        </div>
    );
};

export default Home;