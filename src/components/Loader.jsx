import React from "react";

//gif
import { Triangle } from "react-loader-spinner";

//styles
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.container}>
            <Triangle
                height="120"
                width="120"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

            <h1>Wait a moment . . .</h1>
        </div>
    );
};

export default Loader;

