import React from "react";
import Image from "next/image";
import BookWaysCard from "../BookWaysCard/BookWaysCard";
import styles from "./VmsSection.module.css";

const VmsSection = () => {
  return (
    <section className={styles.main}>
      {/* MAIN SECTION FOR VMS */}
      <div className={styles.container}>
        <div className={`${styles.vms_txt} ${styles.SUB_HEADING}`}>
          <h3>
            Hipla Meeting Room <br /> Management System
          </h3>
          <p>
            Hipla Meeting Room Management System streamlines booking, provides
            real-time availability, and optimizes scheduling for efficient room
            management.
          </p>
          <ul>
            <li>
              <Image
                src={"/icons/check.svg"}
                height={20}
                width={20}
                alt="tick icon"
              />
              Efficient Booking
            </li>
            <li>Real-Time Availability</li>
            <li>Customization for Online Meetings</li>
          </ul>
        </div>

        <div className={styles.vms_img}>
          <img
            src={"/images/vms_img.png"}
            width={"auto"}
            height={"400px"}
            alt="meeting room management system img"
          />
        </div>
      </div>

      {/* BOOK IN THREE WAYS */}
      <div className={`${styles.book_section} ${styles.SUB_HEADING}`}>
        <h3>Book In Three Ways</h3>

        <div className={styles.book_ways}>
          <BookWaysCard
            head="On the Web"
            para="Get more detailed view and advanced management from the online portal."
            img="/images/book_app.png"
            img_alt="book on the web"
          />
          <BookWaysCard
            head="On the App"
            para="Search and book via the HIPLA App for IOS and Android."
            img="/images/book_app.png"
            img_alt="book from the app"
          />
          <BookWaysCard
            head="From your Calendar"
            para="Bring HIPLA into Microsoft Outlook with Smart Calendar."
            img="/images/book_app.png"
            img_alt="book from the calendar"
          />
        </div>
      </div>

      {/* HIPLA MEETING ROOM SYSTEM (WEB)*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Meeting Room Software on the Web</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_web}>
            <Image
              src={"/images/vms_software_in_web.png"}
              width={300}
              height={250}
              alt="meeting room on web"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Customisable Setting</h4>
                <p>
                  Allows for customisable settings, such as room capacity and
                  equipment availability, to ensure each meeting room fits
                  specific needs
                </p>
              </li>
              <li>
                <h4>Download Comprehensive Report</h4>
                <p>
                  Easily obtain a comprehensive report encompassing all meetings
                  conducted within your organization up until the present moment
                </p>
              </li>
              <li>
                <h4>Detailed Meeting summary</h4>
                <p>
                  Effortlessly access comprehensive details about past and
                  upcoming meetings, including summaries of past meetings and an
                  overview of future scheduled ones.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIPLA MEETING ROOM SYSTEM (APP)*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Meeting Room Software on the App</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_app}>
            <Image
              src={"/images/vms_software_in_app.svg"}
              width={300}
              height={250}
              alt="meeting room on web"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Integratation with Other Tools</h4>
                <p>
                  Seamlessy integrates with other tools, such as calendars and
                  productivity software, to enhance the overall meeting
                  experience.
                </p>
              </li>
              <li>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  aliquam saepe culpa. Possimus, consequuntur explicabo.
                </p>
              </li>
              <li>
                <h4>Lorem, ipsum.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum magni error esse ab at. Reiciendis saepe facere quos
                  eius commodi? Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Repellat.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VmsSection;
