import BottomNav from "../components/bottomNav";
import { useState } from 'react';
import Home from "./navPages/home";
import Category from "./navPages/category";
import Wishlist from "./navPages/wishlist";
import Profile from "./navPages/profile";

function App() {
  const appTitle = "Techwise";
  const navNames = [
    { label: 'Home', icon: 'home' },
    { label: 'Category', icon: 'category' },
    { label: 'Wishlist', icon: 'favorite' },
    { label: 'Profile', icon: 'person' },
  ]
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
