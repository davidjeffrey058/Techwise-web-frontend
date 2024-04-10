import CartIcon from './cartIcon'

const Head = ({ title }) => {
    return (
        <div>
            <header className='mobile'>
                <div className="title_cart">
                    <h2 className="title">{title.toUpperCase()}</h2>
                    <CartIcon iconColor={'black'} />
                </div>
                <div className="input_search row_spc_btw">
                    <p className="grey_text">Search here...</p>
                    <i className="material-symbols-outlined">search</i>
                </div>
            </header>

            <header className='laptop'>
                <div className="title_cart">
                    <h2 className="title">{title.toUpperCase()}</h2>
                    <div className="input_search row_spc_btw">
                        <p className="grey_text">Search here...</p>
                        <i className="material-symbols-outlined">search</i>
                    </div>
                    <CartIcon iconColor={'black'} />
                </div>
            </header>
        </div>
    );
}

export default Head;