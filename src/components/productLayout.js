import { Link } from 'react-router-dom';

const ProductLayout = ({ key }) => {
    return (
        <Link to={'/product_page'} className='link' key={key}>
            <div className="product_container">
                <div className="p_image">
                </div>
                <div className="row first">
                    <p className="section_text" style={{ marginLeft: '0' }}>2021 Apple Macbook pro laptop</p>
                    <i className="material-symbols-outlined" style={{ color: "red" }}>favorite</i>
                </div>
                <div className="row">
                    <p className="price_format">USD1,200.00</p>
                    <div className="rating">
                        <p>4.25</p>
                        <i className="material-symbols-outlined star">star</i>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default ProductLayout;