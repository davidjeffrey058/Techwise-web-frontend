import React from 'react';
import { useState } from 'react';
import { url } from '../methods/urls';
import { Link } from 'react-router-dom';


const Search = ({ width }) => {

    const [searchValue, setSearchValue] = useState('');
    const [result, setResult] = useState([]);

    const fetchData = (value) => {
        fetch(`${url}/search/${value}`)
            .then(response => response.json())
            .then(data => {
                setResult(data)
            }).catch(error => console.log(error));
    }

    const handleChange = (value) => {
        setSearchValue(value);
        fetchData(value);
    }

    return (
        <div>
            <div className='input_search row_spc_btw' style={{ width: width }}>
                <input type="search" name="p_search" id="search" placeholder='Search product here...'
                    value={searchValue}
                    onChange={(event) => handleChange(event.target.value)}
                />
                <i className="material-symbols-outlined">search</i>
            </div>
            <div className="search_suggest card"
                style={{ display: searchValue.length < 1 ? 'none' : '' }}>
                {result && result.map((element, index) => (
                    <Link className='hover row link' key={index}
                        style={{ padding: '10px', borderBottom: index === result.length - 1 ? '' : '1px solid #d0d0d0' }}
                        to={`/product_page/${element._id}`}
                    >
                        <img src={element.image_urls && element.image_urls[0]} alt=""
                            style={{ backgroundColor: '#d0d0d0', marginRight: '10px', objectFit: 'cover' }}
                            width={'45px'}
                            height={'45px'}
                        />
                        <p className='section_text'>{element.name}</p>
                    </Link>
                ))}
                {result && result.length < 1 && <p className='section_text'>No result found</p>}
            </div>
        </div>

    )
}

export default Search