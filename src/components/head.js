import CartIcon from './cartIcon'
import Search from './search';

const Head = ({ title }) => {

    return (
        <div>
            <header className='mobile'>
                <div className="title_cart">
                    <h2 className="title">{title.toUpperCase()}</h2>
                    <CartIcon iconColor={'black'} />
                </div>
                {/* <p className="grey_text">Search here...</p> */}
                <Search />
                <div className="search_suggestion"></div>
            </header>

            <header className='laptop'>
                <div className="title_cart">
                    <h2 className="title">{title.toUpperCase()}</h2>
                    {/* <p className="grey_text">Search here...</p> */}
                    <Search width={'600px'} />
                    <CartIcon iconColor={'black'} />
                </div>
            </header>
        </div>
    );
}

export default Head;