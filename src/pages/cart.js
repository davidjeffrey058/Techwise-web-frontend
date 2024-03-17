import React from 'react'
import AppBar from '../components/appBar'
import BackIcon from '../components/backIcon';

function Cart() {
    const list = [1, 2, 3, 4];
    return (
        <div>

            <AppBar title={'Cart'} leading={<BackIcon />} />
            <div className="cart_p_container">
                {list.map(element => (
                    <div className="cart_product card hover row_spc_btw">
                        <div>
                            <div className='row' style={{ alignItems: 'start' }}>
                                <img src="" alt="img" />
                                <div>
                                    <p style={{ marginBottom: '5px' }} className='section_text'>2021 Apple MacBook pro laptop</p>
                                    <p className='price_format'>USD1,200.00</p>
                                </div>
                            </div>
                            <button className='del'>REMOVE</button>
                        </div>
                        <div className='p_qty_sec'>
                            <i>+</i><br />
                            <p>1</p><br />
                            <i>-</i>
                        </div>
                    </div>
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
        </div>
    )
}

export default Cart