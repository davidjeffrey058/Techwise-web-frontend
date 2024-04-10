import React, { useState } from 'react'
import AppBar from '../components/appBar';
import BackIcon from '../components/backIcon';
import { useParams } from 'react-router-dom';
import useFetch from '../methods/useFetch';
import CurrencyFormat from '../methods/currencyFormat';
import rating from '../methods/rating';
import FavButton from '../components/favButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useAuthState from '../methods/authState';
import { url2 } from '../methods/urls';
import Message from '../components/message'


const ProductPage = ({ url }) => {
    const pId = useParams().id;
    const { authUser } = useAuthState()
    const { data, error, isPending } = useFetch(`${url}/${pId}`);

    const { cartList } = useFetch(`${url2}/list/${authUser && authUser.uid}`);


    return (
        <div className='bdy'>
            <AppBar title={'Details'} leading={<BackIcon />} />
            {error && <Message message={error} />}
            {isPending && <Message message={'Loading...'} />}
            {data && <div>
                <section className='p_info'>
                    <div className="carousel_container">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={(swiper) => { }}
                            onSwiper={(swiper) => { }}
                            loop={true}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            className='swiper_container'
                        >
                            {data.image_urls.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img className='card' src={image} alt={`${data.name} (img ${index + 1})`}
                                        height={'240px'} width={'95%'} style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination"></div>
                        </Swiper>

                    </div>
                    {/* indicators
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
                    </div> */}
                    <div style={{ margin: '20px 15px' }}>
                        <div className='row_spc_btw'>
                            <p className="grey_text" style={{ fontSize: '20px', marginBottom: '5px' }}>{data.name}</p>
                            <FavButton pid={data._id} />
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
                        <table className='pp_table'>
                            {Object.keys(data.key_properties).map((key, index) => (
                                <tr>
                                    <td>{key}</td>
                                    <td>{data.key_properties[key]}</td>
                                </tr>
                            ))}
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
