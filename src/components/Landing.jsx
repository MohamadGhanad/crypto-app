import React from 'react';
import { useState, useEffect } from 'react';

//Api
import { getCoin } from '../services/api'

//components 
import Loader from './Loader';
import Coin from './Coin';

//styles
import styles from './Landing.module.css'

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin()
            setCoins(data)
            console.log();
        }

        fetchAPI()
    }, [])


    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className={styles.container}>
            <input type='text' placeholder='Search...' value={search} onChange={(event) => setSearch(event.target.value)} />

            {
                coins.length ?
                    <div className={styles.data}>
                        {
                            searchedCoins.map(coin => <Coin
                                key={coin.id}
                                data={coin}
                            />)
                        }
                    </div>

                    : <Loader />
            }
        </div>
    );
};

export default Landing;