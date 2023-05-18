import React from 'react';
import { useState, useEffect } from 'react';

//API
import { getCoin } from '../services/Api';

// COMPONENTS
import Coin from './Coin';
import Loading from './Loading';

//styles
import styles from './Landing.module.css';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        const fetchApi = async() => {
            const data = await getCoin();
            setCoins(data);
        }

        fetchApi();
    }, [])

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input className={styles.input} type='search' placeholder='Search...' value={search} onChange={searchHandler} />

            {
                coins.length ?
                <div className={styles.coinContainer}>
                    {
                        searchedCoins.map(coin => <Coin
                            key={coin.id}    
                            name={coin.name}
                            symbol={coin.symbol}
                            image={coin.image}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />)
                    }
                </div> :                
                <Loading />
            }
        
        </>
    );
};

export default Landing;