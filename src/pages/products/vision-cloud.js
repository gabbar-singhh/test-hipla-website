import {
  Hero,
  VideoCTA,
  TextHolder,
  FeaturesList,
  FocusFeatures,
} from "../../components/Products";
import styled from "styled-components";

const FEATURES = [
  {
    value: "safety-management",
    title: "Safety management",
    description:
      "Analyze and manage SOP and safety guidelines complaince. Easily customize/manage rules.",
    list: [
      "Incident Management",
      "Accident Prevention",
      "Social Distancing",
      "Real-time alerts",
      "Custom use cases",
      "Hygiene Protocols",
      "Real-time Alerts",
      "Unified Dashboards",
      "Production area guidelines monitoring",
    ],
    imageURL: "/images/safety-management.png",
  },
  {
    value: "security-manangement",
    title: "Security Management",
    description:
      "Monitor and execute workplace security protocols. Get instant alerts on any breaches.",
    list: [
      "Intruder Detection",
      "Perimeter fencing",
      "Personnel FR",
      "Instant-breach alerts",
      "Unauthorized area access",
      "Gate entrances access control",
      "ANPR and parking access",
    ],
    imageURL: "/images/security-management.png",
  },
  {
    value: "gmp-management",
    title: "GMP Management",
    description:
      "Easily manage quality and regulatory guideline implement and audit Good Manufacturing Process (GMP) protocols from one platform.",
    list: [
      "Accident Prevention",
      "No-mask Detection",
      "Hygiene & safety compliance",
      "PPE-adherence",
      "Safety gear adherence",
      "ISO/GMP/USFDA Certified use cases",
    ],
    imageURL: "/images/gmp-management.png",
  },
  {
    value: "productivity-management",
    title: "Productivity Management",
    description:
      "Easily customize, implement and analyze productivity metrics. Reduce down-time and increase process efficiency.",
    list: [
      "Production Cycle-time tracking",
      "Loitering and Down-time tracking",
      "Integrates with existing cameras",
      "Custom use cases",
      "Insight on queue times",
      "Unified dashboard",
      "AI-enabled",
    ],
    imageURL: "/images/productivity-management.png",
  },
];

const FOCUSING_FEATURES = [
  {
    icon: "/vectors/CCTV.svg",
    title: "Instantly integrates with 95%+ of CCTVs",
  },
  {
    icon: "/vectors/dashboards.svg",
    title: "Easy dashboards and EHS/GMP audits.",
  },
  {
    icon: "/vectors/safety compliance.svg",
    title: "End-to-end safety compliance documentation",
  },
];

const AccessCloud = () => {
  return (
    <Main>
      <Hero
        title="Vision Cloud Solutions"
        description="Manage Security, Safety and GMP protocols compliance. Integrate all camera feed to one smart dashboard."
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

      <VideoCTA imageURL="/images/vision-video-cta.png" />

      <TextHolder text="A simple pick and choose model with effortless plug and play implementation." />

      <FocusFeatures data={FOCUSING_FEATURES} />

      <FeaturesList data={FEATURES} isTwoGrids={true} />
    </Main>
  );
};

export default AccessCloud;

const Main = styled.div`
  padding-top: 0px;
`;
