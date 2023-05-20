import React from 'react';

//styles
import styles from './Coin.module.css';

const Coin = ({ name, image, price, marketcap, priceChange }) => {

    return (
        <div className={styles.coin}>
            <img src={image} alt='img' />
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price.toLocaleString()} $</span>
            <span className={styles.change}>{priceChange}</span>
            <span className={styles.cap}>{marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;