import React, { useState } from 'react'
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
    const { data, error, isPending } = useFetch(`http://localhost:8080/techwise-api/${pId}`);
    const [imageIndex, setImageIndex] = useState(0)

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
                            onSlideChange={(swiper) => { setImageIndex(swiper.activeIndex) }}
                            onSwiper={(swiper) => { }}
                        >
                            {data.image_urls.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img className='card' src={image} alt={`${data.name} (img ${index + 1})`}
                                        height={'240px'} width={'95%'} style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* indicators */}
                    <div style={{
                        height: '20px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {
                            data.image_urls.map((element, index) => (
                                <div key={index} style={{
                                    width: index === imageIndex ? '10px' : '7px',
                                    height: index === imageIndex ? '10px' : '7px',
                                    backgroundColor: index === imageIndex ? '#0074A6' : ' #d0d0d0',
                                    marginInline: '5px',
                                    borderRadius: '50%',
                                    transition: 'all 0.2s ease-in'
                                }}></div>
                            ))
                        }
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
                        <p className="section_text" style={{ marginLeft: '0' }}>Product Properties</p>
                        <table>

                        </table>
                    </div>
                </section>

                {/* Add to cart */}
                <div className="p_action row">
                    <button className="add">
                        <i className="material-symbols-outlined " style={{ marginRight: '5px' }}>add_shopping_cart</i>
                        ADD TO CART
                    </button>
                </div>
            </div>}


        </div>
    )
}

export default ProductPage;
