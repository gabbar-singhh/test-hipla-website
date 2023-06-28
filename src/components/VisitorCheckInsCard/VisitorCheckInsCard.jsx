import React from "react";
import styles from "./VisitorCheckInsCard.module.css";

const VisitorCheckInsCard = (props) => {
  return (
    <section className={styles.main}>
      <span>
        <img src={props.img} height={35} alt="" />
      </span>

      <h4>{props.title}</h4>

      <p>
       {props.desc}
      </p>
    </section>
  );
};

export default VisitorCheckInsCard;
