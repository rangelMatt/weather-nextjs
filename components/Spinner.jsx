import Image from "next/image";
import React from "react";
import spinner from "../public/loading.gif";
import styles from "../styles/Loading.module.css";

const Spinner = (props) => {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Spinner;
