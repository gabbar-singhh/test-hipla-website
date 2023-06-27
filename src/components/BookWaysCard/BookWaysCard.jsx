import React from "react";
import styles from "./BookWaysCard.module.css";

const BookWaysCard = (props) => {
  return (
    <div className={styles.book_card}>
      <h4>{props.head}</h4>
      <p>{props.para}</p>
      <img src={props.img} height={300} width={300} alt={props.img_alt} />
    </div>
  );
};

export default BookWaysCard;
