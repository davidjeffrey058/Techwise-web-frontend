import BottomNav from "./components/bottomNav";
import { useState } from 'react';
import Home from "./pages/home";
import Category from "./pages/category";
import Wishlist from "./pages/wishlist";
import Profile from "./pages/profile";

function App() {
  const appTitle = "Techwise";
  const navNames = ['Home', 'Category', 'Wishlist', 'Profile']
  let [selectedIndex, setSelectedIndex] = useState(0);

  const onNavItemOnCick = (index) => {
    setSelectedIndex(index);
  }

  return (
    <div className="App">
      {selectedIndex === 0 && <Home title={appTitle} />}
      {selectedIndex === 1 && <Category />}
      {selectedIndex === 2 && <Wishlist />}
      {selectedIndex === 3 && <Profile />}
      <BottomNav navNames={navNames} selectedIndex={selectedIndex} handleClick={onNavItemOnCick} />
    </div>
  );
}

export default App;
