import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";
import useFetch from "../../methods/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'

const Home = ({ title, url }) => {
    const { data: products, error, isPending } = useFetch(url);
    return (
        <div className="bdy">
            <Head title={title} />
            {products && <div className="aft_head">
                <div className="special_product">
                    {/* <i className="material-symbols-outlined">chevron_left</i>
                    <i className="material-symbols-outlined">chevron_right</i> */}

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={window.screen.width > 890 ? 3 : 1}
                        effect="coverflow"
                        centeredSlides={true}
                        grabCursor={true}
                        loop={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel]}
                        mousewheel={{ enabled: true, forceToAxis: true }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        className="swiper_container"
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {products.map((element, index) => (
                            <SwiperSlide>
                                <div className="special_img card" style={{
                                    backgroundImage: `url(${element.image_urls[0]})`,
                                    // height: '200px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundAttachment: 'fixed',
                                    backgroundColor: 'grey'
                                }}>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slider-controller">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name='arrow-back-outline'></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>

                </div>

                {/* Popular Products Section */}
                <p className="section_text">Popular Products</p>
                <div className="section">
                    {error && <p>{error}</p>}
                    {isPending && <p>Loading...</p>}
                    {products && products.map((element, index) => (<ProductLayout key={index} product={element} />))}
                </div>
                <p className="section_text">Featured Products</p>
                <div className="section">
                    {error && <p>{error}</p>}
                    {isPending && <p>Loading...</p>}
                    {products && products.map((element, index) => (<ProductLayout key={index} product={element} />))}
                </div>
            </div>}
        </div>
    );
}

export default Home;