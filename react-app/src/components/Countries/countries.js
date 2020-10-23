import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './countries.module.css';

const URL = "https://restcountries.eu/rest/v2";
const ERROR_TYPES = {
    "Network Error": "Something happen! please retry"
};

const regions = [
    {
        id: 0,
        name: 'Africa'
    },
    {
        id: 1,
        name: 'America'
    },
    {
        id: 2,
        name: 'Asia'
    },
    {
        id: 3,
        name: 'Europe'
    },
    {
        id: 4,
        name: 'Oceania'
    }
]
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [query, setQuery] = useState('ro');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchCountries = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            let response = '';            
            if(query.length)
            {   
                response = await axios(`${URL}/name/${query}`);
            }
            else{
                response = await axios(`${URL}/region/${region}`);
            }
            const hits = response.data;
            setCountries(hits);
        } catch (e) {
            setErrorMessage(ERROR_TYPES[e.message] ?? "Ooooops!");
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchCountries();
    }, [query, region]);

    const handleOnChange = (event) => {
        setQuery(event.target.value);
        fetchCountries();
    };

    const handleOnChangeRegion = (event) => {
        setQuery('');
        setRegion(event.target.value);
    };

    const ShowContent = () => {
        if (isLoading) {
            return <p>Loading ...</p>
        }

        if (errorMessage.length) {
            return <p>Error: {errorMessage}</p>
        }

        return <div className={styles.cards}>
            {
                countries.map(item =>
                    <div className={styles.card}>
                        <img src={item.flag} alt={item.name} className={styles.img} />
                        <div className="container">
                            <h4><b>{item.name}</b></h4>
                            <p>Population: {item.population}</p>
                            <p>Region: {item.region}</p>
                            <p>Capital: {item.capital}</p>
                        </div>
                    </div>
                )
            }
        </div>
    };

    return (
        <div>
            <div>
                <label htmlFor='search-id' />
                <input type="text" id='search-id' value={query} onChange={handleOnChange} />
                <select name="region" value={region} onChange={handleOnChangeRegion} className={styles.select}>
                    <option value="">Filter by region</option>
                    {regions.map((x) => (
                        <option value={x.name}>{x.name}</option>
                    ))}
                </select>
            </div>
            <ShowContent />
        </div >
    )
};

export default Countries