const Head = ({ title }) => {
    return (
        <header>
            <div className="title_cart">
                <h2 className="title">{title.toUpperCase()}</h2>
                <i>Cart</i>
            </div>
            <input className="input_search" type="text" />
        </header>
    );
}

export default Head;