import { Link } from "react-router-dom";
import AppBar from "../../components/appBar";
import CartIcon from '../../components/cartIcon';
import { useState } from "react";
import CategoryPage from "../categoryPage";
import { url } from "../../methods/urls";

const Category = () => {
    const categories = [
        { imageUrl: "cat_images/laptop.png", name: "Laptops" },
        { imageUrl: "cat_images/desktop.png", name: "Desktops" },
        { imageUrl: "cat_images/pc_gaming.png", name: "Pc Gaming" },
        { imageUrl: "cat_images/monitor.png", name: "Monitors" },
        { imageUrl: "cat_images/processor.jpg", name: "Computer Components" },
        { imageUrl: "cat_images/tablet.png", name: "Tablet & Phones" },
        { imageUrl: "cat_images/keyboard_mouse.png", name: "Computer Accessories" },
        { imageUrl: "cat_images/hard_drive.png", name: "Storage & Hard Drives" },
        { imageUrl: "cat_images/moderm.png", name: "Networking" },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);

    function onOptionClicked(index) {
        setSelectedIndex(index);
    }

    return (
        <div className="bdy">
            <AppBar title={"Category"} action={<CartIcon />} />
            <div className="aft_head">
                <div className="gridview cat_grid">
                    {categories.map((element, index) => (
                        <Link to={`/category_page/${element.name}`} className='link' key={index}>
                            <div className="category_container card hover" key={element.name}>
                                <img src={element.imageUrl} alt="img" width={96} height={69} style={{ objectFit: 'contain' }} />
                                <br />
                                <p className="price_format">{element.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="row cont">
                    <div className="cat_option_cont">
                        {categories.map((element, index) => (
                            <div className="card hover row" key={index}
                                style={{ backgroundColor: selectedIndex === index ? '#E3EBEF' : '' }}
                                onClick={() => onOptionClicked(index)}>
                                <img src={element.imageUrl} alt="img" width={50} height={50} />
                                <p className="price_format" style={{ marginLeft: '10px' }}>{element.name}</p>
                            </div>
                        ))}
                    </div>
                    <CategoryPage url={url} showAppBar={false} customParam={categories[selectedIndex].name} />
                    <div></div>
                </div>
            </div>

        </div>
    );
}

export default Category;