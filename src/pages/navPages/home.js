import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";

const Home = ({ title }) => {
    const list = [1, 2, 5, 3, 6];
    return (
        <div className="bdy">
            <Head title={title} />
            <div className="special_product">
                <i className="material-symbols-outlined">chevron_left</i>
                <i className="material-symbols-outlined">chevron_right</i>
            </div>
            {/* Popular Products Section */}
            <p className="section_text">Popular Products</p>
            <div className="section">
                {list.map((element) => (<ProductLayout key={element} />))}
            </div>
            <p className="section_text">Popular Products</p>
            <div className="section">
                {list.map((element) => (<ProductLayout key={element} />))}
            </div>
        </div>
    );
}

export default Home;