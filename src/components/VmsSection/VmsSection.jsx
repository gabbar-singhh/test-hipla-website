import React from "react";
import styles from "./VmsSection.module.css";
import Image from "next/image";
import BookWaysCard from "../BookWaysCard/BookWaysCard";
import VisitorCheckInsCard from "../VisitorCheckInsCard/VisitorCheckInsCard";

const VmsSection = () => {
  return (
    <section className={styles.main}>
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
      {/* SIMPLIFY CHECK-INS */}
      <div className={`${styles.simplify} ${styles.SUB_HEADING}`}>
        <h3>Hipla Simplify Check-ins!</h3>

        <div className={styles.check_ins_container}>
          <VisitorCheckInsCard
            title="Go paperless"
            img="/icons/paperless_icon.png"
            desc=" Eliminates the need for paper-based visitor logs and also enables an
            eco-friendlier approach to visitor management system."
          />
          <VisitorCheckInsCard
            img="/icons/secure_icon.png"
            title="Secure Premises"
            desc="Ensures that all visitors are diligently verified and authenticated before granting access and preventing unauthorized entry."
          />
          <VisitorCheckInsCard
            img="/icons/insights_icon.png"
            title="insights on visitor"
            desc="Captures visitor data and provides insights on visitor behaviour, enabling businesses to tailor their services and offerings."
          />
        </div>
      </div>
      {/* BOOK IN THREE WAYS */}
      <div className={`${styles.book_section} ${styles.SUB_HEADING}`}>
        <h3>Book In Three Ways</h3>

        <div className={styles.book_ways}>
          <BookWaysCard
            title_color="#2d59a7"
            desc_color="#484848"
            bg_color="rgb(234 236 243);"
            head="On the Web"
            para="Access advanced management through online portal."
            img="/images/book_app.png"
            img_alt="book on the web"
          />
          <BookWaysCard
            title_color="#2d59a7"
            desc_color="#484848"
            bg_color="rgb(234 236 243);"
            head="On the App"
            para="Search and book via the HIPLA App for IOS and Android."
            img="/images/book_app.png"
            img_alt="book from the app"
          />
          <BookWaysCard
            title_color="#2d59a7"
            desc_color="#484848"
            bg_color="rgb(234 236 243);"
            head="From your Calendar"
            para="Bring HIPLA into Microsoft Outlook with Smart Calendar."
            img="/images/book_app.png"
            img_alt="book from the calendar"
          />
        </div>
      </div>

      {/*  VMS ON YOUR WEB!*/}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Visitor Management System on the Web</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_app}>
            <img
              src={"/images/mrm_software_in_web.png"}
              width={300}
              height={250}
              alt="meeting room on web"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Real-time Dashboard</h4>
                <p>
                  Provides real-time data and analytics on visitor traffic,
                  enabling businesses to optimise resources and make informed
                  decisions.
                </p>
              </li>
              <li>
                <h4>Adjust bookings instantly</h4>
                <p>
                  Instant adjustments to bookings, provide businesses with the
                  adapt to changing circumstances.
                </p>
              </li>
              <li>
                <h4>Book with ease</h4>
                <p>
                  Easily manage bookings, whether it's scheduling appointments
                  or reserving meeting rooms.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* VMS ON YOUR APP */}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Visitor Management Software on the App</h3>

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
                <h4>Create Visits</h4>
                <p>
                  Create visit with our intuitive Visitor management system.
                  Ensuring efficient utilization of resources and optimal
                  productivity.
                </p>
              </li>
              <li>
                <h4>Instant Visitor Arrival Alert</h4>
                <p>
                  When visitors arrive, ensure that they are promptly greeted
                  and provide an additional layer of security to the premise
                </p>
              </li>
              <li>
                <h4>Efficient Track Functionality</h4>
                <p>Allowing businesses to manage visitor traffic effectively</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* VMS ON YOUR TAB */}
      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Visitor Mangement System on the Tab</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_app}>
            <Image
              src={"/images/mrm_img.png"}
              width={300}
              height={250}
              alt="vms on tab"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis porro, deserunt quasi mollitia necessitatibus
                  voluptatem vel eaque quibusdam.
                </p>
              </li>
              <li>
                <h4>Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  porro ab cupiditate. Lorem ipsum dolor sit.
                </p>
              </li>
              <li>
                <h4>Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  velit deserunt praesentium consequatur omnis.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.SOFTWARE_IN} ${styles.SUB_HEADING}`}>
        <h3>Visitor Mangement System in your Calendar</h3>

        <div className={styles.CONTAINER_IN}>
          <div className={styles.leftside_app}>
            <Image
              src={"/images/mrm_img.png"}
              width={300}
              height={250}
              alt="vms on tab"
            />
          </div>

          <div className={styles.RIGHTSIDE_IN}>
            <ul>
              <li>
                <h4>Easily integrate with google outlook</h4>
                <p>
                  Simplifying the management of meetings and appointments for
                  businesses with an effortless and intuitive approach.
                </p>
              </li>
              <li>
                <h4>Instant Visitor Alerts</h4>
                <p>
                  Instant alerts when visitors arrive, enabling businesses to
                  greet their guests promptly.
                </p>
              </li>
              <li>
                <h4>Repeat meetings taken care of</h4>
                <p>
                  Enabling businesses to easily schedule recurring appointments
                  for seamless organization and efficiency
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* VMS CHECK-IN EASE */}
      <div className={`${styles.simplify} ${styles.SUB_HEADING}`}>
        <h3>Configure your Visitor Check-in with Ease</h3>

        <div className={styles.check_ins_container}>
          <VisitorCheckInsCard
            title="User Friendly"
            img="/icons/userfriendly_icon.png"
            desc="Designed to provide a user-friendly experience through intuitive interfaces and clear, easy-to-follow instructions."
          />
          <VisitorCheckInsCard
            img="/icons/flexibile_icon.png"
            title="Streamlined"
            desc="Simplify visitor check-in process, reducing the need for manual record-keeping and paperwork system."
          />
          <VisitorCheckInsCard
            img="/icons/commitment_icon.png"
            title="Confidental Commitment"
            desc="Sign an NDA preventing visitors from disclosing information about their experiences within a specific location."
          />
        </div>
      </div>
    </section>
  );
};

export default VmsSection;
