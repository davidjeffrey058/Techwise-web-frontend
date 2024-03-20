import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";
import useFetch from "../../methods/useFetch";

const Home = ({ title }) => {
    const { data: products, error, isPending } = useFetch('http://10.206.35.1:8080/techwise-api');
    // const list = [1, 2, 5, 3, 6];
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
                {products && products.map((element) => (<ProductLayout key={element} product={element} />))}
            </div>
            <p className="section_text">Featured Products</p>
            <div className="section">
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {products && products.map((element) => (<ProductLayout key={element} product={element} />))}
            </div>
        </div>
    );
}

export default Home;