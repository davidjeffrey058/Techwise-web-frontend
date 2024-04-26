import React, { useState } from 'react'
import AppBar from '../components/appBar'
import BackIcon from '../components/backIcon';
import useFetch from '../methods/useFetch';
import useAuthState from '../methods/authState';
import Message from '../components/message';
import CurrencyFormat from '../methods/currencyFormat';
import { Link } from 'react-router-dom';

function Cart({ url }) {

    // function readCartData(data, cartData) {
    //     data.forEach(value => {
    //         cartData.push(value);
    //     });
    //     console.log(cartData);
    // }
    // let [cartData, setCarData] = useFetch();
    function sum(data, cartList) {
        let amountSum = 0;
        for (let i = 0; i < data.length; i++) {
            amountSum += data[i].price * cartList[i].order_quantity;
        }
        return amountSum;
    }

    let deliveryFee = 20;
    let promoCode = 0;

    const { authUser } = useAuthState();
    const { data, isPending, error } = useFetch(`${url}/cart/${authUser && authUser.uid}`);
    const { data: cartList } = useFetch(`${url}/cart/list/${authUser && authUser.uid}`);

    // cartList && console.log(cartList)

    return (
        <div>

            <AppBar title={'Cart'} leading={<BackIcon />} />
            {authUser && <div style={{ height: '90dvh' }}>

                {/* When waiting */}
                {isPending && <Message message={'Loading...'} />}

                {/* When data is empty */}
                {(data && data.length <= 0) && <Message message={'No item in your cart'} />}

                {/* When there is an error */}
                {(!data && !isPending) && <Message message={error} />}

                {/* When data is available */}
                {((data && data.length > 0) && cartList) && <div className='cart_bdy'>

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
                                    <i style={{ backgroundColor: cartList[index].order_quantity === element.quantity ? '#d0d0d0' : '' }}>+</i><br />
                                    <p>{cartList[index].order_quantity}</p><br />
                                    <i style={{ backgroundColor: cartList[index].order_quantity < 2 ? '#d0d0d0' : '' }}>-</i>
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
                            <p>{CurrencyFormat(sum(data, cartList))}</p>
                        </div>
                        <div className="sum_row row_spc_btw">
                            <p>Delivery</p>
                            <p>{CurrencyFormat(deliveryFee)}</p>
                        </div>
                        <div className="sum_row row_spc_btw">
                            <p>Promo Discount</p>
                            <p>{CurrencyFormat(0)}</p>
                        </div>
                        <hr />
                        <div className="sum_row row_spc_btw">
                            <p>Sub total</p>
                            <p>{CurrencyFormat(sum(data, cartList) + deliveryFee + promoCode)}</p>
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