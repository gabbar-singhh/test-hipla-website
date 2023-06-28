import React from "react";
import styles from "./VmsSection.module.css";
import BookWaysCard from "../BookWaysCard/BookWaysCard";
import VisitorCheckInsCard from "../VisitorCheckInsCard/VisitorCheckInsCard";

const VmsSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_container}>
        {/* MAIN SECTION FOR VMS  */}
        <div className={styles.container}>
          <div className={`${styles.vms_txt} ${styles.SUB_HEADING}`}>
            <h3>Hipla Visitor Management Solution</h3>
            <p>
              Hipla Visitor Management Solution: Smooth check-ins, real-time
              analytics, secure premises. Empowers businesses with productivity
              tools, optimizing resources, and tailoring services to visitor
              needs.
            </p>
            <ul>
              <li>
                <span>
                  <img
                    className={styles.img}
                    src={"/icons/checkins_icon.png"}
                    width={20}
                    height={20}
                    alt="smooth checkins icons"
                  />
                </span>
                <h6>Smooth Check-ins</h6>
              </li>
              <li>
                <span>
                  <img
                    src={"/icons/operations_quickly.png"}
                    className={styles.img}
                    width={20}
                    height={20}
                    alt="operations quickly icon"
                  />
                </span>
                <h6>Manage your operations quickly</h6>
              </li>
              <li>
                <span>
                  <img
                    className={styles.img}
                    src={"/icons/workstyle_icon.png"}
                    width={20}
                    height={18}
                    alt="smooth checkins icons"
                  />
                </span>
                <h6>Empower your work-style</h6>
              </li>
            </ul>
          </div>

          <div className={styles.vms_img}>
            <img
              src={"/images/mrm_img.png"}
              width={"auto"}
              height={"400px"}
              alt="visitor management system img"
            />
          </div>
        </div>

        <div className={`${styles.simplify} ${styles.SUB_HEADING}`}>
          <h3>Hipla Simplify Check-ins!</h3>

          <div className={styles.check_ins_container}>
            <VisitorCheckInsCard
              title="Go paperless"
              img="/icons/paperless_icon.png"
              desc=" Eliminates the need for paper-based visitor logs and enables an
            eco-friendlier approach to visitor management"
            />
            <VisitorCheckInsCard
              img="/icons/secure_icon.png"
              title="Secure Premises"
              desc="Ensures that all visitors are diligently verified and authenticated before granting access and preventing unauthorized entry."
            />
            <VisitorCheckInsCard
              img="/icons/insights_icon.png"
              title="insights on visitor behaviour"
              desc="Captures visitor data and provides insights on visitor behaviour, enabling businesses to tailor their services and offerings."
            />
          </div>
        </div>

        {/* BOOK IN THREE WAYS */}
        <div className={`${styles.book_section} ${styles.SUB_HEADING}`}>
          <h3>Book In Three Ways</h3>

          <div className={styles.book_ways}>
            <BookWaysCard
              bg_color="#fff"
              head="On the Web"
              para="Get more detailed view and advanced management from the online portal."
              img="/images/book_app.png"
              img_alt="book on the web"
            />
            <BookWaysCard
              bg_color="#fff"
              head="On the App"
              para="Search and book via the HIPLA App for IOS and Android."
              img="/images/book_app.png"
              img_alt="book from the app"
            />
            <BookWaysCard
              bg_color="#fff"
              head="From your Calendar"
              para="Bring HIPLA into Microsoft Outlook with Smart Calendar."
              img="/images/book_app.png"
              img_alt="book from the calendar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VmsSection;
