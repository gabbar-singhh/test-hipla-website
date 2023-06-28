import React, { useState } from "react";
import styles from "./BookWaysCard.module.css";

const BookWaysCard = (props) => {
  const [customCSS, setCustomCSS] = useState({
    bg_color: "#fff",
    title: "#232323",
    desc: "#ffffffbf",
  });
  return (
    <div
      style={{ backgroundColor: customCSS.bg_color }}
      className={styles.book_card}
    >
      <h4 style={{ color: customCSS.title }}>{props.head}</h4>
      <p>{props.para}</p>
      <img src={props.img} height={300} width={300} alt={props.img_alt} />
    </div>
  );
};

export default BookWaysCard;
