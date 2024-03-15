import AppBar from "../components/appBar"

const Wishlist = () => {
    const list = [2, 1, 3, 2]
    return (
        <div className="bdy wishlist">
            <AppBar title={"Wishlist"} />
            <div className="all_wishlists">
                {list.map(element => (
                    <div className="wishlist_container">
                        <div className="w_info_row">
                            <img src="" alt="img" />
                            <div>
                                <p>Hp Pavilion Gaming PC</p>
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