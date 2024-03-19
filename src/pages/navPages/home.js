import Head from "../../components/head";
import ProductLayout from "../../components/productLayout";
import { useState, useEffect } from 'react';

const Home = ({ title }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://10.206.34.55:8080/techwise-api')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

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
                {products && products.map((element) => (<ProductLayout key={element} product={element} />))}
            </div>
            <p className="section_text">Popular Products</p>
            {/* <div className="section">
                {list.map((element) => (<ProductLayout key={element} />))}
            </div> */}
        </div>
    );
}

export default Home;