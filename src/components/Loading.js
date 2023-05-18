import React from 'react';

//gif
import icon from '../gif/Spinner-3.gif';

//styles
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div>
            <img className={styles.image} src={icon} alt='load' />
            <h2 className={styles.head}>Loading . . .</h2>
        </div>
    );
};

export default Loading;