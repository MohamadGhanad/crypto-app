import React, { useState } from 'react';


//styles
import styles from './Coin.module.css';




const Coin = ({ data }) => {
    const { name, image, current_price, market_cap, price_change_percentage_24h } = data;


    const [mouseIn, setMouseIn] = useState(false)

    const [open, setOpen] = useState(false)


    return (
        <>
            <div className={styles.coin}>
                <div className={styles.pic}><img src={image} alt='img' /></div>
                <div className={styles.name}><span>{name}</span></div>
                <div className={styles.price}><span>{current_price.toLocaleString()} $</span></div>
                <div className={price_change_percentage_24h >= 0 ? styles.pos : styles.neg}><span >{price_change_percentage_24h}</span></div>
                <div onClick={() => setOpen(true)} onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} className={styles.icon}>
                    <span></span>
                    <span className={mouseIn ? styles.up : null}></span>
                    <span></span>
                </div>
            </div >

            {
                open &&
                <div className={styles.layer}>
                    <div className={styles.details}>
                        <div onClick={() => setOpen(false)} onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} className={styles.closeIcon}>
                            <span className={mouseIn ? styles.first : null}></span>
                            <span className={mouseIn ? styles.second : null}></span>
                        </div>
                    </div>
                </div>
            }

        </>
    );
};

export default Coin;