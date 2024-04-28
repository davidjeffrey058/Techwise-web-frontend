import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AppBar from "../../components/appBar";
import CartIcon from '../../components/cartIcon';
import useAuthState from "../../methods/authState";
import CurrencyFormat from "../../methods/currencyFormat";
import Message from "../../components/message";
import AddCartButton from "../../components/addCartButton";
import AddOrRemWish from "../../methods/addOrRemWish";
import { url2 } from "../../methods/urls";

const Wishlist = ({ uri }) => {
    const [wishData, setwishData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const { authUser } = useAuthState();


    useEffect(() => {
        if (authUser) {
            fetch(`${uri}/${authUser.uid}`)
                .then((res) => res.json())
                .then(data => {
                    setIsPending(false);
                    setwishData(data);
                })
                .catch(error => {
                    setIsPending(false);
                    setError(error.message);
                });
        }
    }, [uri, authUser]);

    return (
        <div className="bdy wishlist">
            <AppBar title={"Wishlist"} action={<CartIcon />} />
            <div className="aft_head">
                {authUser && <div className="all_wishlists">
                    {/* Loading */}
                    {isPending && <Message message={'Loading...'} />}

                    {/* has error */}
                    {(error && !wishData) && <Message message={error} />}

                    {/* Empty wishist */}
                    {(wishData && wishData.length === 0) && <Message message={'No saved item'} />}

                    {/* Has data */}
                    {wishData && <div className="wish_grid">
                        {wishData.map((element, index) => (

                            <div className="wishlist_container" >
                                <Link to={'/product_page/' + element._id} className="link">
                                    <div className="w_info_row">
                                        <img src={element.image_urls[0]} alt="img" style={{ objectFit: 'cover' }} />
                                        <div>
                                            <p className="grey_text">{element.name}</p>
                                            <p className="price_format">{CurrencyFormat(element.price)}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="wb_info_row">
                                    <button className="del"
                                        onClick={() => {
                                            AddOrRemWish(authUser.uid, element._id, true, () => {
                                                setwishData(wishData.filter(doc => doc._id !== element._id))
                                            }, url2)
                                        }}>REMOVE</button>
                                    {/* <button className="add">ADD TO CART</button> */}
                                    <AddCartButton pid={element._id} padding={'10px 10px'} />
                                </div>
                            </div>

                        ))}
                    </div>}
                </div>}
            </div>

            {/* When logged out */}
            {!authUser && <div>
                <Message message={'Login to access your saved items'}
                    button={
                        <Link to={'/auth'}>
                            <button className="add message">Login</button>
                        </Link>
                    } />
            </div>}
        </div>
    );
}

export default Wishlist;
