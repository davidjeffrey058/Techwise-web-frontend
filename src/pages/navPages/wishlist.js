import { Link } from "react-router-dom";
import AppBar from "../../components/appBar"
import CartIcon from '../../components/cartIcon';
import useAuthState from "../../methods/authState";
import CurrencyFormat from "../../methods/currencyFormat";
import useFetch from "../../methods/useFetch";

const Wishlist = ({ uri }) => {
    const { authUser } = useAuthState();
    const { data, isPending, error } = useFetch(`${uri}/${authUser && authUser.uid}`);

    return (
        <div className="bdy wishlist">
            <AppBar title={"Wishlist"} action={<CartIcon />} />
            {authUser && <div className="all_wishlists">
                {/* Loading */}
                {isPending && <p>Loading...</p>}

                {/* has error */}
                {(error && !authUser) && <p>Couldn't get data</p>}

                {/* Empty wishist */}
                {(data && data.length === 0) && <p>No Saved item</p>}

                {/* Has data */}
                {data && data.map((element, index) => (
                    <Link to={'/product_page/' + element._id} className="link" key={index}>
                        <div className="wishlist_container hover" >
                            <div className="w_info_row">
                                <img src={element.image_urls[0]} alt="img" style={{ objectFit: 'cover' }} />
                                <div>
                                    <p className="grey_text">{element.name}</p>
                                    <p className="price_format">{CurrencyFormat(element.price)}</p>
                                </div>
                            </div>
                            <div className="wb_info_row">
                                <button className="del">REMOVE</button>
                                <button className="add">ADD TO CART</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>}

            {/* When logged out */}
            {!authUser && <div>
                <p>Login to get cart products</p>
                <Link to={'/auth'}>
                    <button className="add">Login</button>
                </Link>
            </div>}
        </div>
    );
}

export default Wishlist;