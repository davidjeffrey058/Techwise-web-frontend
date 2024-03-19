import { Link } from 'react-router-dom';
import rating from '../models/methods';

const ProductLayout = ({ product }) => {
    return (
        <Link to={`/product_page/${product._id}`} className='link' key={product._id}>
            <div className="product_container hover">
                <img src={product.image_urls[0]} alt='' className="p_image card" />
                <div className="row first" style={{ alignItems: 'start', marginTop: '10px', justifyContent: 'space-between' }}>
                    <p className="section_text" style={{ marginLeft: '0' }}>{product.name}</p>
                    <i className="material-symbols-outlined" style={{ color: "red" }}>favorite</i>
                </div>
                <div className="row">
                    <p className="price_format">USD{product.price}</p>
                    <div className="rating">
                        <p>{rating(product.total_rating, product.num_of_reviews)}</p>
                        <i className="material-symbols-outlined star filled">star</i>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductLayout;