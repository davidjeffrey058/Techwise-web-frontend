import AppBar from "../../components/appBar"
import CartIcon from '../../components/cartIcon';

const Wishlist = () => {
    const list = [2, 1, 3, 2]
    return (
        <div className="bdy wishlist">
            <AppBar title={"Wishlist"} action={<CartIcon />} />
            <div className="all_wishlists">
                {list.map(element => (
                    <div className="wishlist_container hover">
                        <div className="w_info_row">
                            <img src="" alt="img" />
                            <div>
                                <p className="grey_text">Hp Pavilion Gaming PC</p>
                                <p className="price_format">USD499.99</p>
                            </div>
                        </div>
                        <div className="wb_info_row">
                            <button className="del">REMOVE</button>
                            <button className="add">ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;