import React from 'react'
import AppBar from '../components/appBar';
import BackIcon from '../components/backIcon';

const ProductPage = () => {
    return (
        <div className='bdy'>
            <AppBar title={'Details'} leading={<BackIcon />} />
            <section className='p_info'>
                <div className="carousel_container"></div>
                <div style={{ margin: '20px 15px' }}>
                    <div className='row_spc_btw'>
                        <p className="grey_text" style={{ fontSize: '20px', marginBottom: '5px' }}>2021 Apple Macbook Pro</p>
                        <i className="material-symbols-outlined" style={{ color: "red" }}>favorite</i>
                    </div>
                    <p className="price_format" style={{ fontSize: '18px', marginBottom: '16px' }}>USD1,200.00</p>
                    <div className="row">
                        <p className='small_text'>4.98</p>
                        <i className="material-symbols-outlined star">star</i>
                        <p className='small_text' style={{ marginLeft: '5px' }}>(240 reviews)</p>
                    </div>
                    <p className="section_text" style={{ marginLeft: '0' }}>Description</p>
                    <p className='desc_text'>
                        Video provides a powerful way to help you prove your point.
                        When you click Online Video, you can paste in the embed code
                        for the video you want to add.
                        You can also type a keyword to search online for the video that
                        best fits your document.
                        To make your document look professionally produced,
                        Word provides header, footer,
                        cover page, and text box designs that complement each other.
                        For example, you can add a matching cover page, header,
                        and sidebar
                    </p>
                </div>
            </section>
            <div className="p_action row">
                <button className="add">
                    <i className="material-symbols-outlined ">add_shopping_cart</i>
                    ADD TO CART
                </button>
            </div>

        </div>
    )
}

export default ProductPage;
