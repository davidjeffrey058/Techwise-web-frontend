import React from 'react'
import AppBar from '../components/appBar'
import { useParams } from 'react-router-dom'
import BackIcon from '../components/backIcon'
import ProductGrid from '../components/productGrid'
import useFetch from '../methods/useFetch'

const CategoryPage = () => {
    const list = [2, 4, 6, 3, 9];
    const param = useParams();
    const { data, error, isPending } = useFetch(`http://localhost:8080/techwise-api/category/${param.cat}`);

    console.log(data)
    return (
        <div>
            <AppBar title={param.cat} leading={<BackIcon />} />
            {data && <ProductGrid data={data} />}
        </div>
    )
}

export default CategoryPage