import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"



const Category = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;