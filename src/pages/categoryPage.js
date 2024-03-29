import React from 'react'
import AppBar from '../components/appBar'
import { useParams } from 'react-router-dom'
import BackIcon from '../components/backIcon'
import ProductGrid from '../components/productGrid'
import useFetch from '../methods/useFetch'

const CategoryPage = ({ url }) => {
    const param = useParams();
    const { data, error, isPending } = useFetch(`${url}/category/${param.cat}`);

    // console.log(data)
    return (
        <div>
            <AppBar title={param.cat} leading={<BackIcon />} />
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && <ProductGrid data={data} />}
        </div>
    )
}

export default CategoryPage