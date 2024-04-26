import { NavLink, Outlet } from 'react-router-dom';
import useAuthState from '../methods/authState';
import { Link } from 'react-router-dom';


function App() {
  const navNames = [
    { label: 'Home', icon: 'home', url: '/' },
    { label: 'Category', icon: 'category', url: '/category' },
    { label: 'Wishlist', icon: 'favorite', url: '/wishlist' },
    { label: 'Profile', icon: 'person', url: '/profile' },
  ];

  const { authUser } = useAuthState();

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

          <Link style={{ marginTop: 'auto' }} to={authUser ? '' : '/auth'}>
            <img src={authUser && (authUser.photoURL) ? authUser.photoURL : "profile.png"}
              alt="" width={'45px'}
              style={{ borderRadius: '50%' }}
              title={authUser ? `Logged in as ${authUser.email}` : 'Not logged in'}
            />
          </Link>

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
