const BottomNav = ({ navNames, selectedIndex, handleClick }) => {


    return (
        <nav className="bottom_nav">{
            navNames.map((element) => (
                <div className={selectedIndex === navNames.indexOf(element) ? "nav_item selected" : "nav_item"}
                    onClick={() => handleClick(navNames.indexOf(element))}>
                    <i className="material-symbols-outlined">{element.icon}</i>
                    <p>{element.label}</p>
                </div>
            ))
        }</nav>
    );
}

export default BottomNav;