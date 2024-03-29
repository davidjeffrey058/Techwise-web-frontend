import CartIcon from './cartIcon'

const Head = ({ title }) => {
    return (
        <header>
            <div className="title_cart">
                <h2 className="title">{title.toUpperCase()}</h2>
                <CartIcon iconColor={'black'} />
            </div>
            <div className="input_search row_spc_btw">
                <p className="grey_text">Search here...</p>
                <i className="material-symbols-outlined">search</i>
            </div>
        </header>
    );
}

export default Head;