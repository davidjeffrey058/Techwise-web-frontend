import React from 'react'
import AppBar from '../components/appBar'
import { useParams } from 'react-router-dom'
import BackIcon from '../components/backIcon'
import ProductGrid from '../components/productGrid'
import useFetch from '../methods/useFetch'
import Message from '../components/message'

const CategoryPage = ({ url, customParam, showAppBar = true }) => {
    const param = useParams();
    const { data, error, isPending } = useFetch(`${url}/category/${customParam || param.cat}`);

    // console.log(data)
    return (
        <div>
            {showAppBar && <AppBar title={param.cat} leading={<BackIcon />} />}
            {isPending && <Message message={'Loading'} />}
            {error && <Message message={error} />}
            {data && <ProductGrid data={data} />}
        </div>
    )
}

export default CategoryPage