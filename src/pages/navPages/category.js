import AppBar from "../../components/appBar";
import CartIcon from '../../components/cartIcon';

const Category = () => {
    const categories = [
        { imageUrl: "cat_images/laptop.png", name: "Laptops" },
        { imageUrl: "cat_images/desktop.png", name: "Desktops" },
        { imageUrl: "cat_images/pc_gaming.png", name: "Pc Gaming" },
        { imageUrl: "cat_images/monitor.png", name: "Monitors" },
        { imageUrl: "cat_images/processor.jpg", name: "Computer Components" },
        { imageUrl: "cat_images/tablet.png", name: "Tablet & Phones" },
        { imageUrl: "cat_images/keyboard_mouse.png", name: "Comuter Accessories" },
        { imageUrl: "cat_images/hard_drive.png", name: "Storage & Hard Drives" },
        { imageUrl: "cat_images/moderm.png", name: "Networking" },
    ]
    return (
        <div className="bdy">
            <AppBar title={"Category"} action={<CartIcon />} />
            <div className="gridview">
                {categories.map((element) => (
                    <div className="category_container card hover">
                        <img src={element.imageUrl} alt="img" width={96} height={69} style={{ objectFit: 'contain' }} />
                        <br />
                        <p className="price_format">{element.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;