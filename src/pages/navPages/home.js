import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";
import useFetch from "../../methods/useFetch";

const Home = ({ title, url }) => {
    const { data: products, error, isPending } = useFetch(url);
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
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {products && products.map((element, index) => (<ProductLayout key={index} product={element} />))}
            </div>
            <p className="section_text">Featured Products</p>
            <div className="section">
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {products && products.map((element, index) => (<ProductLayout key={index} product={element} />))}
            </div>
        </div>
    );
}

export default Home;