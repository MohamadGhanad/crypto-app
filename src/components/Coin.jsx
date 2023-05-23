import React, { useState } from 'react';



//styles
import styles from './Coin.module.css';

//sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines-typescript-v2';




const Coin = ({ data }) => {
    const { name, image, symbol, current_price, market_cap, price_change_percentage_24h, total_volume, high_24h, low_24h, sparkline_in_7d } = data;


    const [mouseIn, setMouseIn] = useState(false)

    const [open, setOpen] = useState(false)

    const values = [...data.sparkline_in_7d.price];

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
                    <div className={styles.box}>
                        <div className={styles.details}>
                            <div className={styles.header}>
                                <div className={styles.pic}><img src={image} alt='img' /></div>
                                <div className={styles.name}><span>{name} - {symbol}</span></div>
                            </div>
                            <div onClick={() => setOpen(false)} onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} className={styles.closeIcon}>
                                <span className={mouseIn ? styles.first : null}></span>
                                <span className={mouseIn ? styles.second : null}></span>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.more}>
                            <h2>Market cap - {market_cap.toLocaleString()}</h2>
                            <p>Total volume - {total_volume}</p>
                            <p>High 24h - {high_24h}</p>
                            <p>Low 24h - {low_24h}</p>

                            <Sparklines data={values}>
                                {
                                    price_change_percentage_24h >= 0 ?
                                        <SparklinesLine color="green" />
                                        : <SparklinesLine color="red" />
                                }
                            </Sparklines>
                        </div>
                    </div>
                </div>
            }

        </>
    );
};

export default Coin;