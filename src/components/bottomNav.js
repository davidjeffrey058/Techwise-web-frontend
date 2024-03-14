const BottomNav = ({ navNames, selectedIndex, handleClick }) => {


    return (
        <nav className="bottom_nav">{
            navNames.map((element) => (
                <div className={selectedIndex === navNames.indexOf(element) ? "nav_item selected" : "nav_item"}
                    onClick={() => handleClick(navNames.indexOf(element))}>
                    <i>{element}</i>
                    <p>{element}</p>
                </div>
            ))
        }</nav>
    );
}

export default BottomNav;