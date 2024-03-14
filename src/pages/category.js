import AppBar from "../components/appBar";

const Category = () => {
    const categories = [
        { imageUrl: "", name: "Laptops" },
        { imageUrl: "", name: "Desktops" },
        { imageUrl: "", name: "Pc Gaming" },
        { imageUrl: "", name: "Monitors" },
        { imageUrl: "", name: "Computer Components" },
        { imageUrl: "", name: "Tablet & Phones" },
        { imageUrl: "", name: "Comuter Accessories" },
        { imageUrl: "", name: "Storage & Hard Drives" },
        { imageUrl: "", name: "Networking" },
    ]
    return (
        <div className="bdy">
            <AppBar title={"Category"} />
            <div className="gridview">
                {categories.map((element) => (
                    <div className="category_container">
                        <img src="" alt="img" width={96} height={69} />
                        <p className="price_format">{element.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;