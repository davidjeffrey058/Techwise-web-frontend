import React from 'react'
import AppBar from '../components/appBar';
import BackIcon from '../components/backIcon';
import { useParams } from 'react-router-dom';
import useFetch from '../methods/useFetch';
import CurrencyFormat from '../methods/currencyFormat';
import rating from '../methods/rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const ProductPage = () => {
    const pId = useParams().id;
    const { data, error, isPending } = useFetch(`http://10.206.35.1:8080/techwise-api/${pId}`);
    console.log(data);

    return (
        <div className='bdy'>
            <AppBar title={'Details'} leading={<BackIcon />} />
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <div>
                <section className='p_info'>
                    <div className="carousel_container">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {data.image_urls.map(image => (
                                <SwiperSlide>
                                    <img className='card' src={image} alt="img" height={'240px'} width={'95%'} style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    <div style={{ margin: '20px 15px' }}>
                        <div className='row_spc_btw'>
                            <p className="grey_text" style={{ fontSize: '20px', marginBottom: '5px' }}>{data.name}</p>
                            <i className="material-symbols-outlined" style={{ color: "red" }}>favorite</i>
                        </div>
                        <p className="price_format" style={{ fontSize: '18px', marginBottom: '16px' }}>{CurrencyFormat(data.price)}</p>
                        <div className="row">
                            <p className='small_text'>{rating(data.total_rating, data.num_of_reviews)}</p>
                            <i className="material-symbols-outlined star filled">star</i>
                            <p className='small_text' style={{ marginLeft: '5px' }}>({data.num_of_reviews} review{data.num_of_reviews <= 1 ? '' : 's'})</p>
                        </div>
                        <p className="section_text" style={{ marginLeft: '0' }}>Description</p>
                        <p className='desc_text'>{data.description}</p>
                    </div>
                </section>
                <div className="p_action row">
                    <button className="add">
                        <i className="material-symbols-outlined ">add_shopping_cart</i>
                        ADD TO CART
                    </button>
                </div>
            </div>}


        </div>
    )
}

export default ProductPage;
