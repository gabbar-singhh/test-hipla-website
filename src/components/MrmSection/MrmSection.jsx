import React from "react";
import Image from "next/image";
import BookWaysCard from "../BookWaysCard/BookWaysCard";
import styles from "./MrmSection.module.css";

const MrmSection = () => {
  return (
    <section className={styles.main}>
      {/* MAIN SECTION FOR MRM */}
      <div className={styles.container}>
        <div className={`${styles.mrm_txt} ${styles.SUB_HEADING}`}>
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
              <span>
                <img
                  className={styles.img}
                  src={"/icons/booking_icon.png"}
                  width={20}
                  height={20}
                  alt="booking icon"
                />
              </span>
              <h6>Efficient Booking</h6>
            </li>
            <li>
              <span>
                <img
                  src={"/icons/realtime_icon.png"}
                  className={styles.img}
                  width={20}
                  height={20}
                  alt="realtime icon"
                />
              </span>
              <h6>Real-Time Availability</h6>
            </li>
            <li>
              <span>
                <img
                  className={styles.img}
                  src={"/icons/onlinemeeting_icon.png"}
                  width={20}
                  height={18}
                  alt="online meetings icon"
                />
              </span>
              <h6>Customization for Online Meetings</h6>
            </li>
          </ul>
        </div>

        <div className={styles.mrm_img}>
          <img
            src={"/images/mrm_img.png"}
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
            bg_color="rgb(162 170 212 / 17%)"
            head="On the Web"
            para="Get more detailed view and advanced management from the online portal."
            img="/images/book_app.png"
            img_alt="book on the web"
          />
          <BookWaysCard
            bg_color="rgb(162 170 212 / 17%)"
            head="On the App"
            para="Search and book via the HIPLA App for IOS and Android."
            img="/images/book_app.png"
            img_alt="book from the app"
          />
          <BookWaysCard
            bg_color="rgb(162 170 212 / 17%)"
            head="From your Calendar"
            para="Bring HIPLA into Microsoft Outlook with Smart Calendar."
            img="/images/book_app.png"
            img_alt="book from the calendar"
          />
        </div>
      </div>

      {/* HIPLA MEETING ROOM SYSTEM (APP)*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Meeting Room Software on the App</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_app}>
            <Image
              src={"/images/mrm_software_in_app.svg"}
              width={300}
              height={250}
              alt="meeting room on web"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Create Meetings</h4>
                <p>
                  Schedule and create meetings with our intuitive Meeting Room
                  Software. Ensuring efficient utilization of resources and
                  optimal productivity.
                </p>
              </li>
              <li>
                <h4>Meeting Notifications</h4>
                <p>
                  Meeting Room Software sends timely notifications, providing
                  you with all the necessary details to plan your schedule
                  effectively.
                </p>
              </li>
              <li>
                <h4>Integratation with Other Tools</h4>
                <p>
                  Seamlessy integrates with other tools, such as calendars and
                  productivity software, to enhance the overall meeting
                  experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIPLA MEETING ROOM SYSTEM (WEB)*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Meeting Room Software on the Web</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_web}>
            <Image
              src={"/images/mrm_software_in_web.png"}
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

      {/* HIPLA MEETING ROOM SYSTEM (TAB)*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Meeting Room Software on the Tab</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_web}>
            <Image
              src={"/images/mrm_img.png"}
              width={300}
              height={250}
              alt="meeting room on tab"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Quick Book</h4>
                <p>
                  With just a few taps, reserve the ideal meeting room for your
                  team, saving time and eliminating scheduling conflicts.
                </p>
              </li>
              <li>
                <h4>End Meeting</h4>
                <p>
                  Mark the completion of the session with a simple action,
                  ensuring accurate tracking of room availability and efficient
                  resource management.
                </p>
              </li>
              <li>
                <h4>Color-coded Schedule</h4>
                <p>
                  Easily view ongoing and upcoming meetings, with colors
                  assigned to each event for clear differentiation. Avoid any
                  overlapping commitments.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIPLA CALENDARS INTEGRATIONS */}
      <div className={`${styles.SUB_HEADING} ${styles.calendar}`}>
        <h3>
          Meeting Room Software in your <br /> Calendar
        </h3>

        <div className={`${styles.card_container}`}>
          <div className={styles.calCard}>
            <img
              src="/brands/google_calendar.png"
              alt="google calendar logo"
              height={150}
              width={150}
            />
          </div>
          <div className={styles.calCard}>
            <img
              src="/brands/outlook.png"
              alt="outlook calendar logo"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MrmSection;
