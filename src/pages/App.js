import { NavLink, Outlet } from 'react-router-dom';


function App() {
  const navNames = [
    { label: 'Home', icon: 'home', url: '/' },
    { label: 'Category', icon: 'category', url: '/category' },
    { label: 'Wishlist', icon: 'favorite', url: '/wishlist' },
    { label: 'Profile', icon: 'person', url: '/profile' },
  ];

  return (
    <div className="App">
      <div className='app_div'>

        {/* Side navigation bar */}
        <nav className="side_nav">
          {navNames.map((element) => (
            <NavLink to={element.url} key={element.url} className={`link nav_item`}>
              <div>
                <i className="material-symbols-outlined">{element.icon}</i>
                <p>{element.label}</p>
              </div>
            </NavLink>

          ))}
        </nav>
        <Outlet className={'outlet'} />

        {/* Bottom navigation */}
        <nav className="bottom_nav">{
          navNames.map((element) => (
            <NavLink to={element.url} key={element.url} className={`link nav_item`}>
              <div>
                <i className="material-symbols-outlined">{element.icon}</i>
                <p>{element.label}</p>
              </div>
            </NavLink>

          ))
        }</nav>
      </div>

    </div>
  );
}

export default App;
