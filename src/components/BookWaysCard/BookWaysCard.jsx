import React, { useState } from "react";
import styles from "./BookWaysCard.module.css";

const BookWaysCard = (props) => {
  const [customCSS, setCustomCSS] = useState({
    bg_color: `${props.bg_color}`,
    title: `${props.title_color}`,
    desc: `${props.desc_color}`,
  });
  return (
    <div
      style={{ backgroundColor: customCSS.bg_color }}
      className={styles.book_card}
    >
      <h4 style={{ color: customCSS.title }}>{props.head}</h4>
      <p style={{ color: customCSS.desc }}>{props.para}</p>
      <img src={props.img} height={300} width={300} alt={props.img_alt} />
    </div>
  );
};

export default BookWaysCard;
