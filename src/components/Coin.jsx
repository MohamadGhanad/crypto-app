import React, { useState } from 'react';

//styles
import styles from './Coin.module.css';

const Coin = ({ name, image, price, priceChange }) => {



    return (
        <div className={styles.coin}>
            <div className={styles.pic}><img src={image} alt='img' /></div>
            <div className={styles.name}><span>{name}</span></div>
            <div className={styles.price}><span>{price.toLocaleString()} $</span></div>
            <div className={priceChange >= 0 ? styles.pos : styles.neg}><span >{priceChange}</span></div>
        </div >
    );
};

export default Coin;