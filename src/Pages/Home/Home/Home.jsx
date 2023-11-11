import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeatuedItem/FeaturedItem";
import PopularMenu from "../Popular menu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;