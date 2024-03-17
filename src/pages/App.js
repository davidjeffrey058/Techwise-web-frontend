import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const navNames = [
    { label: 'Home', icon: 'home', url: '/' },
    { label: 'Category', icon: 'category', url: '/category' },
    { label: 'Wishlist', icon: 'favorite', url: '/wishlist' },
    { label: 'Profile', icon: 'person', url: '/profile' },
  ]

  return (
    <div className="App">
      <Outlet />

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
  );
}

export default App;
