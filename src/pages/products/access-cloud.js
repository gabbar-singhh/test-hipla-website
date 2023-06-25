import {
  Hero,
  VideoCTA,
  TextHolder,
  FeaturesList,
  FocusFeatures,
} from "../../components/Products";
import styled from "styled-components";
import Head from "next/head";

const FEATURES = [
  {
    value: "visitor-management",
    title: "Visitor Management",
    description: "Delight visitor and contractors with swift check-in.",
    list: [
      "Real-time notifications",
      "In-office navigation",
      "Microsoft and Google integration",
      "Visitor-tracking",
      "Ad-hoc & meeting workflows",
    ],
    imageURL: "/images/visitor-management.png",
  },
  {
    value: "employee-attendance",
    title: "Digital Access Control",
    description: "Enable your team with more time and less documentation.",
    list: [
      "Rapid temp. & safety check-in",
      "Check-in and Check-out",
      "Microsoft and Google integration",
      "Facial Recognition based attendance",
      "Cloud-native employee management",
    ],
    imageURL: "/images/employee-attendance-management.png",
  },
  {
    value: "meeting-room-management",
    title: "Meeting Room Management",
    description: "Preview, schedule and manage meeting room bookings.",
    list: [
      "Smart meeting-room allocation",
      "Microsoft & Google Integrations",
      "Meeting start & end time reminders",
      "Integration with building management systems for energy efficiency",
    ],
    imageURL: "/images/meeting-room-management.png",
  },
  // {
  //   value: "parking-management",
  //   title: "Parking management",
  //   description:
  //     "Number-plate recognition for documentation and spot-blocking. Parking-space occupancy metrics.",
  //   list: [
  //     "Number-plate recognition",
  //     "East-to-read dashboards",
  //     "Microsoft & Google Integrations",
  //     "Navigation visitors to available parking space",
  //   ],
  //   imageURL: require("../../public/images/parking-management.png"),
  // },
];

const FOCUSING_FEATURES = [
  {
    icon: "/vectors/top_icon1.svg",
    title: "All the integrations you need",
  },
  {
    icon: "/vectors/top_icon2.svg",
    title: "End-to-end space management from 1 dashboard",
  },
  {
    icon: "/vectors/top_icon3.svg",
    title: "Real-time notifications (Text, in-app, Mail) ",
  },
];

const AccessCloud = () => {
  return (
    <>
      <Head>
        <title>Access Control Cloud Solutions- Hipla</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta
          name="description"
          content="Our access control cloud solutions is powerful features built to create unforgettable experiences, amaze visitor, employees and contractors"
        />
        <meta
          name="keywords"
          content="digital aaccess control, visitor management system, vms, check in attendance system, meeting room booking syste"
        />
        <link rel="canonical" href="https://hipla.io/products/access-cloud" />
      </Head>

      <Main>
        <Hero
          title="Product Module"
          description="Powerful features built to create unforgettable experiences with our Visitor Management Solution secure your workplace with digital check-in system."
          buttons={[
            // {
            //   title: "Learn More",
            //   type: "outline-primary",
            //   url: "/",
            // },
            {
              title: "Get Started",
              type: "primary",
              url: "/get-started",
            },
          ]}
        />

        <VideoCTA imageURL={"/images/access-video-cta.png"} />

        <TextHolder text="A simple pick and choose model with effortless plug and play implementation." />

        <FocusFeatures data={FOCUSING_FEATURES} />

        <FeaturesList data={FEATURES} />
      </Main>
    </>
  );
};

export default AccessCloud;

const Main = styled.div`
  padding-top: 0px;
`;

const icon = styled.div`
  width: 50%;
`;
