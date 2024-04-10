import React from 'react'
import AppBar from '../components/appBar'
import BackIcon from '../components/backIcon';
import useFetch from '../methods/useFetch';
import useAuthState from '../methods/authState';
import Message from '../components/message';
import CurrencyFormat from '../methods/currencyFormat';
import { Link } from 'react-router-dom';

function Cart({ url }) {
    const { authUser } = useAuthState();
    const { data, isPending, error } = useFetch(`${url}/cart/${authUser && authUser.uid}`);
    data && console.log(data);
    return (
        <div>

            <AppBar title={'Cart'} leading={<BackIcon />} />
            {authUser && <div>
                {/* When waiting */}
                {isPending && <Message message={'Loading...'} />}

                {/* When data is empty */}
                {(data && data.length <= 0) && <Message message={'No item in your cart'} />}

                {/* When there is an error */}
                {(!data && !isPending) && <Message message={error} />}

                {/* When data is available */}
                {(data && data.length > 0) && <div>

                    <div className="cart_p_container">
                        {data.map((element, index) => (
                            <Link to={`/product_page/${element._id}`} className="cart_product card hover row_spc_btw link" key={index}>
                                <div>
                                    <div className='row' style={{ alignItems: 'start' }}>
                                        <img src={element.image_urls[0]} alt="img" style={{ objectFit: 'cover' }} />
                                        <div>
                                            <p style={{ marginBottom: '5px' }} className='section_text'>{element.name}</p>
                                            <p className='price_format'>{CurrencyFormat(element.price)}</p>
                                        </div>
                                    </div>
                                    <button className='del'>REMOVE</button>
                                </div>
                                <div className='p_qty_sec'>
                                    <i>+</i><br />
                                    <p>1</p><br />
                                    <i>-</i>
                                </div>
                            </Link>
                        ))}
                    </div>



                    <div className="summary_section">
                        <div className="voucher_container card">
                            <input type="text" placeholder='Promo code here...' />
                            <button className='add' style={{ width: '95px', fontSize: '12px' }}>Apply</button>
                        </div>
                        <div className="sum_row row_spc_btw">
                            <p>Cart Total</p>
                            <p>USD1,200.00</p>
                        </div>
                        <div className="sum_row row_spc_btw">
                            <p>Delivery</p>
                            <p>USD1,200.00</p>
                        </div>
                        <div className="sum_row row_spc_btw">
                            <p>Promo Discount</p>
                            <p>USD1,200.00</p>
                        </div>
                        <hr />
                        <div className="sum_row row_spc_btw">
                            <p>Sub total</p>
                            <p>USD1,200.00</p>
                        </div>
                        <button className="add">PROCEED TO CHECKOUT</button>
                    </div>
                </div>}
            </div>
            }
        </div>
    )
}

export default Cart