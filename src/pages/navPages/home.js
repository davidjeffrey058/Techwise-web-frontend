import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";
import useFetch from "../../methods/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = ({ title, url }) => {
    const { data: products, error, isPending } = useFetch(url);
    return (
        <div className="bdy">
            <Head title={title} />
            <div className="special_product">
                {/* <i className="material-symbols-outlined">chevron_left</i>
                <i className="material-symbols-outlined">chevron_right</i> */}

                {products &&
                    <Swiper>
                        {products.map((element, index) => (
                            <SwiperSlide>
                                <div style={{
                                    width: '100%',
                                    aspectRatio: `${16 / 9}`,
                                    backgroundImage: `url(${element.image_urls[0]})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundAttachment: 'fixed  '
                                }}></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }


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
        </div>
    );
}

export default Home;