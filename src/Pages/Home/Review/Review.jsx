import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from "react-icons/bi";






const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle
                subTitle="---What Our Clients Say---"
                title="TESTIMONIALS"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(items => <SwiperSlide key={items._id}>
                        <div className="mx-24 flex flex-col justify-center items-center space-y-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={items.rating}
                                readOnly
                            />
                            <BiSolidQuoteLeft className="text-7xl"></BiSolidQuoteLeft>
                            <p>{items.details}</p>
                            <h3 className="text-3xl text-yellow-500">{items.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;