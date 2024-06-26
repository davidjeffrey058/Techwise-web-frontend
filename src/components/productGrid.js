import React from 'react'
import CurrencyFormat from '../methods/currencyFormat'
import rating from '../methods/rating'
import { Link } from 'react-router-dom'
import FavButton from './favButton'
const ProductGrid = ({ data }) => {
    return (
        <div className='gridview cgrid' style={{ gap: '5px', margin: '10px' }}>
            {data.map((element, index) => (
                <Link className='link' to={`/product_page/${element._id}`} key={index}>
                    <div className='card hover' key={index}
                        style={{
                            overflow: 'hidden'
                        }}>
                        {/* image */}
                        <div style={{
                            aspectRatio: '1.5',
                            backgroundColor: '#d0d0d0',
                            position: 'relative'
                        }}>
                            <img src={element.image_urls[0]} alt={element.name} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
                            <FavButton styles={{
                                color: "red",
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                zIndex: '3',
                                backgroundColor: 'white',
                                padding: '5px',
                                borderRadius: '50%'
                            }} pid={element._id} />
                        </div>

                        {/* info */}
                        <p className='section_text' style={{ margin: '10px', overflow: 'clip' }}>{element.name}</p>
                        <div className="row_spc_btw" style={{ margin: '0 10px 10px 10px' }}>
                            <p className="price_format">{CurrencyFormat(element.price)}</p>
                            <div className='row rating'>
                                <p>{rating(element.total_rating, element.num_of_reviews)}</p>
                                <i className="material-symbols-outlined star filled">star</i>
                            </div>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default ProductGrid