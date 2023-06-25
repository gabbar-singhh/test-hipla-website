import React from "react";
import styled from "styled-components";
import { colors } from "../config";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="How to Become an SEO Expert (8 Steps)"
        />
        <meta
          property="og:description"
          content="Get from SEO newbie to SEO pro in 8 simple steps."
        />
        <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        />
      </Head>

      <HeadingHolder>
        <h1>Blogs</h1>
      </HeadingHolder>
      <Holder>
        <MainBody>
          <MaiContainer>
            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-25.jpg"}
                  alt="Hipla Visitor Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Hipla's Stand-out Visitor Management System Features You
                  Should Know
                </Heading>
                <Description>
                  A visitor management system is becoming increasingly important
                  in today's world. They provide businesses with an efficient
                  way to manage visitors, track their movements and ensure their
                  safety. By using a visitor management system, businesses can
                  create a secure environment for both employees and visitors.
                </Description>
                <Button href="/blog/hipla's-stand-out-visitor-management-system-features-you-should-know">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-24.jpeg"}
                  alt="Meeting Room Display Booking Software"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>Meeting Room Display & Its Benefits</Heading>
                <Description>
                  A meeting room display refers to the technology used to
                  present information and facilitate collaboration in a meeting
                  or conference room setting. It typically includes a large
                  screen or display panel connected to a computer or other
                  devices.
                </Description>
                <Button href="/blog/meeting-room-display">Read more</Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog23.jpg"}
                  alt="Visitor Sign-In Solution"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  How Hipla's Sign-In Solution Eases Visitor Check-In
                </Heading>
                <Description>
                  Visitor management software is typically a digital programme
                  or software that allows registering and tracking visitors,
                  prospects, clients, and guests into a location or a corporate
                  site. It is an increasingly dependable method of storing and
                  arranging visitor information and data because it is totally
                  dependent on digital experiences, which are typically
                  AI-enabled.
                </Description>
                <Button href="/blog/How-Hipla's-Sign-In-Solution-Eases-Visitor-Check-In">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-22.jpg"}
                  alt="visitor management system for manufacturing facilities"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  How to get better with visitor management at your
                  manufacturing facilities
                </Heading>
                <Description>
                  The manufacturing industry has witnessed remarkable
                  innovation, with machines replacing human labour, mass
                  production capabilities, and the integration of intelligent AI
                  systems. These advancements have propelled the industry's
                  growth, leading to the addition of over a million jobs alone
                  this year.
                </Description>
                <Button href="/blog/How-to-get-better-with-visitor-management-at-your-manufacturing-facilities">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-21.jpeg"}
                  alt="Visitor Experience"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Strategies for elevating the visitor's experience
                </Heading>
                <Description>
                  If you are employed at a law office, consulting firm, or any
                  other place that frequently hosts guests for important
                  meetings, you understand the significance of building strong
                  client relationships. Establishing a positive image for your
                  brand and demonstrating a commitment to prioritizing clients
                  are essential steps in securing their business. Offering a VIP
                  experience during their visit to your office is an excellent
                  way to accomplish this.
                </Description>
                <Button href="/blog/Strategies-for-elevating-the-visitor's-experience">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-20.jpg"}
                  alt="Digital Workplace Solution"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>Importance of Digital Workplace Solution</Heading>
                <Description>
                  The digital workplace solution has become an integral part of
                  the modern work experience for organizations worldwide. When
                  considering the creation or improvement of your organization's
                  digital workplace platform, it is crucial to understand the
                  numerous benefits it can bring to the table
                </Description>
                <Button href="/blog/Importance-of-Digital-Workplace-Solution">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-19.jpg"}
                  alt="Visitor Management Solution"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  The Impact of the Visitor Management System on the Real Estate
                  Sector
                </Heading>
                <Description>
                  Are you still relying on outdated technology or manual
                  processes to manage your real estate business? It's time to
                  break free from the Stone Age and embrace innovative
                  technology before you become obsolete like the dodos of the
                  bygone era.
                </Description>
                <Button href="/blog/The-Impact-of-the-Visitor-Management-System-on-the-Real-Estate-Sector">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-18.jpg"}
                  alt="Digital Visitor Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Why Is Digital Visitor Management System Even More Important
                  in a Tight Economy?
                </Heading>
                <Description>
                  Companies are continually seeking ways to enhance guest
                  experiences and safeguard data security. One effective
                  solution is the implementation of a visitor management system.
                </Description>
                <Button href="/blog/Why-Is-Digital-Visitor-Management-System-Even-More-Important-in-a-Tight-Economy">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-17.jpg"}
                  alt="Visitor Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  The Ultimate Guide to the Best Visitor Management System in
                  2023
                </Heading>
                <Description>
                  If you are employed at an organization that frequently hosts
                  guests for important meetings, then you are aware of the
                  significance of establishing strong client relationships. This
                  not only enhances your brand's image, but also is a crucial
                  step in acquiring business. Your clients want to be certain
                  that the firm they choose will give them priority - and
                  providing them with a VIP experience during their visit to
                  your office is an excellent way to demonstrate that you do.
                </Description>
                <Button href="/blog/The-Ultimate-Guide-to-the-Best-Visitor-Management-System-in-2023">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-16.jpg"}
                  alt="Top Visitor Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Enhancing Visitor Experience in 2023 with a Top-Tier Visitor
                  Management System
                </Heading>
                <Description>
                  Visitor management systems have become a crucial tool for
                  organizations in ensuring the safety and security of their
                  premises. With the constant advancements in technology, new
                  trends in visitor management continue to emerge. In this
                  article, we will discuss the latest trends in visitor
                  management systems that are expected to shape the future of
                  visitor management( https://hipla.io) in 2023.
                </Description>
                <Button href="/blog/Enhancing-Visitor-Experience-in-2023-with-a-Top-Tier-Visitor-Management-System">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-15.jpg"}
                  alt="Employee Sign-in System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Simplifying the Employee Sign-in System with Visitor
                  Management Software
                </Heading>
                <Description>
                  Visitor management system have become increasingly popular in
                  recent years, particularly among businesses that receive a
                  high volume of visitors. These systems offer a number of
                  benefits, such as improving security and streamlining the
                  check-in process. However, they can also be used to simplify
                  the employee sign-in system.
                </Description>
                <Button href="/blog/Simplifying-the-Employee-Sign-in-System-with-Visitor-Management-Software">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog14.jpg"}
                  alt="Healthcare Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Beyond Traditional Check-Ins: The Power of Modernizing
                  Healthcare Visitor Management System
                </Heading>
                <Description>
                  Make your healthcare facility frictionless with a visitor
                  management system. Guard your check-ins and enhance security
                  with Hipla smart solution.
                </Description>
                <Button href="/blog/Beyond-Traditional-Check-Ins:-The-Power-of-Modernizing-Healthcare-Visitor-Management-System">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-13.jpg"}
                  alt="Enterprise Visitor Management System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Why Your Business Needs an Enterprise Visitor Management
                  System
                </Heading>
                <Description>
                  Enterprise visitor management system is essential for
                  businesses to manage their visitors efficiently and streamline
                  administrative processes.
                </Description>
                <Button href="/blog/Why-Your-Business-Needs-an-Enterprise-Visitor-Management-System">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-12.jpg"}
                  alt="Hipla Conference Room Reservation System"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  How is the Hipla Conference Room Reservation System
                  Supercharge Your Conference Room Success?
                </Heading>
                <Description>
                  The smart workplace revolution is driving the charge towards
                  better-understanding workplaces and how they can improve
                  employee productivity and welfare.
                </Description>
                <Button href="/blog/How-is-the-Hipla-Conference-Room-Reservation-System-Supercharge-Your-Conference-Room-Success?">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-11.jpeg"}
                  alt="Hipla Meeting Room Booking Software"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  The Future of Meetings: Innovations in Meeting Room Booking
                  Software
                </Heading>
                <Description>
                  Meeting room booking software is a cutting-edge innovation
                  that combines hardware and software to streamline scheduling
                  processes in the workplace. The hardware includes room
                  scheduling devices, panels, and hallway signs, such as touch
                  panels placed outside facilities that show schedules for each
                  room, what event is coming up, and the specific people in the
                  meeting.
                </Description>
                <Button href="/blog/The-Future-of-Meetings:-Innovations-in-Meeting-Room-Booking-Software">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-10.jpg"}
                  alt="Hipla Visitor Management Systems"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  How do Hipla Visitor Management Systems Stand Apart from the
                  Rest?
                </Heading>
                <Description>
                  When it comes to managing visitors in a busy office building,
                  providing adequate space and a warm welcome is essential for
                  ensuring a successful and productive experience. Without
                  proper parking or rest areas, visitors may have doubts about
                  attending their meetings and may be less motivated to
                  participate.
                </Description>
                <Button href="/blog/How-do-Hipla-Visitor-Management-Systems-Stand-Apart-from-the-Rest">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-9.jpg"}
                  alt="Leveraging Visitor Data"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Leveraging visitor data for enhanced business operations in
                  your daily workflow
                </Heading>
                <Description>
                  Keeping track of visitors who check in and check out of your
                  office can provide valuable insights that can help you improve
                  your organization. By analyzing visitor data, you can identify
                  patterns and trends that can inform decision-making and
                  improve operational efficiency.
                </Description>
                <Button href="/blog/Leveraging-Visitor-Data-For-Enhanced-Business-Operations-In-Your-Daily-Workflow">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-8.jpg"}
                  alt="Conference room booking software"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Reserve your workspace: optimize your conference room booking
                </Heading>
                <Description>
                  The COVID-19 pandemic has forced many businesses to shut down
                  or reduce sales to prioritize health and safety. This has left
                  many owners and employees struggling to make ends meet. To
                  adapt to these challenges, companies have had to innovate and
                  find new ways to operate with minimal in-person interactions.
                </Description>
                <Button href="/blog/Reserve-your-workspace-optimize-your-conference-room-booking">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-7.jpg"}
                  alt=" Attendance management tracking system"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  The rising popularity of international schools and how to
                  effectively safeguard them
                </Heading>
                <Description>
                  The number of English-medium international schools worldwide
                  is increasing rapidly, with over 13,000 such schools currently
                  in operation. These schools boast an impressive enrollment of
                  5.8 million students and employ over 500,000 teaching staff
                </Description>
                <Button href="/blog/visitor-management-system-for-schools">
                  Read more
                </Button>
              </CardBody>
            </Card>

            {/* <Card>
    <CardHeader>
      <Image src={"/images/blog-6.jpg"} alt=" Attendance management tracking system"  width={1600} height={800} />
    </CardHeader>
    <CardBody>
    <Heading>
      Effective Attendance Management Solutions for Small and Medium Enterprises
    </Heading>
      <Description>
      Small businesses often prioritize initial work and hope that once revenue starts pouring in, everyone will be rewarded. However, this approach can lead to employees feeling overworked and exhausted.
      </Description>
      <Button href="/blog/attendance-management-system">Read more</Button>
    </CardBody>
  </Card> */}

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-5.jpeg"}
                  alt="Facility Management System Services"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  A Dynamic Approach To Management Through The Facility
                  Management System
                </Heading>
                <Description>
                  In today's world, the COVID-19 pandemic has brought about a
                  new and evolving workplace environment. With the rise of the
                  dynamic workplace or hybrid work, it is essential to have a
                  workspace that is accessible yet secure, efficient but not
                  overcrowded, and connected without silos.
                </Description>
                <Button href="/blog/facility-management-services">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-4.jpg"}
                  alt="rover"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Efficient Conference Room Booking System With Automated
                  Scheduling Software
                </Heading>
                <Description>
                  Automated scheduling software is a powerful tool that can help
                  organizations manage their conference rooms booking software
                  more efficiently. With this technology, users can quickly and
                  easily schedule meetings, check availability, and manage
                  conflicts.
                </Description>
                <Button href="/blog/conference-room-management">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-3.jpg"}
                  alt="rover"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  The Importance of Meeting Room Management in Modern Workplaces
                </Heading>
                <Description>
                  In modern workplaces, meetings are an integral part of the
                  workflow. They allow teams to collaborate, make decisions, and
                  align their efforts towards common goals. However, poorly
                  managed meetings can be a major source of frustration and
                  inefficiency.
                </Description>
                <Button href="/blog/meeting-room-management">Read more</Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-2.jpg"}
                  alt="rover"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>
                  Revolutionizing Large Enterprise Visitor Management System:
                  Overcoming Challenges With Hipla Visitor Management Software
                </Heading>
                <Description>
                  In today's world, large enterprises are dealing with various
                  challenges related to visitor management systems. The
                  increasing number of visitors, data security concerns
                </Description>
                <Button href="/blog/visitor-management-software">
                  Read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src={"/images/blog-01.jpg"}
                  alt="Visitor management systems"
                  width={1600}
                  height={800}
                />
              </CardHeader>
              <CardBody>
                <Heading>Visitor management system and How it works</Heading>
                <Description>
                  The sign-in sheet or a piece of paper typically maintained on
                  a clipboard or in a binder at the front desk, is the old
                  version of a visitor management system. A visitor should
                  record their name, the person they are coming to see, and the
                  time when they arrive. The front desk employee then informs
                  the host that their visitor is waiting in the lobby and this
                  will continue for the next coming visitor and so on.
                </Description>
                <Button href="/blog/visitor-management-systems">
                  Read more
                </Button>
              </CardBody>
            </Card>
          </MaiContainer>
        </MainBody>
      </Holder>
    </>
  );
};
export default Blog;

const Holder = styled.div`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 50px;
  mrgin-left: 10px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const HeadingHolder = styled.div`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding-top: 130px;
  mrgin-left: 10px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 20px;
  color: ${colors.textSecondary};
  display: -webkit-box;
  max-height: 150px;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  transition: 0.5s ease-in-out;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Card = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
`;

const MaiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
`;

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
`;

const CardHeader = styled.div`
  width: 100%;
  // height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
`;

const Heading = styled.h3`
  font-size: 19px;
  color: #2e59a8;
  font-weight: 700;
  line-height: 1.4;
  width: 100%;
  display: -webkit-box;
  max-height: 85px;
  overflow: hidden;
  line-height: 22px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
