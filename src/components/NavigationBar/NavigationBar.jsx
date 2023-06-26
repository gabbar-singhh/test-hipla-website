import React from "react";
import Image from "next/image";
import styles from "./NavigationBar.module.css";
import { Navbar, Dropdown, Button } from "@nextui-org/react";

const NavigationBar = () => {
  return (
    <section className={styles.main}>
      <Navbar variant={"static"}>
        {/* HIPLA LOGO  */}
        <Navbar.Brand>
          <Image
            src={"/hipla-logo.svg"}
            width={110}
            height={110}
            alt="hipla logo"
          />
        </Navbar.Brand>

        {/* NAV MAIN COONTENT  */}
        <Navbar.Content hideIn="" gap={12}>
          {/* Nav - Products */}
          <Navbar.Link>
            <Dropdown disableTriggerPressedAnimation="true">
              <Dropdown.Button light color={"#565656"}>
                Products
              </Dropdown.Button>
              <Dropdown.Menu
                css={{ $$dropdownMenuWidth: "300px", fontSize: "14px" }}
                autoFocus="false"
                color="primary"
              >
                <Dropdown.Item key="vms">Visitor Management</Dropdown.Item>
                <Dropdown.Item key="dac">Digital Access Control</Dropdown.Item>
                <Dropdown.Item key="mrm">Meeting Room Management</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Link>

          {/* Nav - Company */}
          <Navbar.Link>
            <Dropdown disableTriggerPressedAnimation="true">
              <Dropdown.Button light color={"#565656"}>
                Company
              </Dropdown.Button>
              <Dropdown.Menu
                css={{ $$dropdownMenuWidth: "300px", fontSize: "14px" }}
                autoFocus="false"
                color="primary"
              >
                <Dropdown.Item key="blog" description="Read Our Blogs">
                  Blog
                </Dropdown.Item>
                <Dropdown.Item
                  key="about"
                  description="Learn more about who we are"
                >
                  About Us
                </Dropdown.Item>
                <Dropdown.Item key="contact" description="Get in touch with us">
                  Contact Us
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Link>

          {/* Nav - Other */}
          <Navbar.Link>
            <Dropdown disableTriggerPressedAnimation="true">
              <Dropdown.Button light color={"#565656"}>
                Others
              </Dropdown.Button>
              <Dropdown.Menu
                css={{ $$dropdownMenuWidth: "300px", fontSize: "14px" }}
                autoFocus="false"
                color="primary"
              >
                <Dropdown.Item
                  key="press"
                  //   description="Stay up-to-date with our press coverage"
                >
                  Press Releases
                </Dropdown.Item>
                <Dropdown.Item
                  key="about"
                  //   description="What customers has said about Hipla"
                >
                  Testimonials
                </Dropdown.Item>
                <Dropdown.Item
                  key="contact"
                  //                   description="Take a look into how leading brands have
                  // made measurable improvements in their workspace"
                >
                  Success Stories
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Button
            autoFocus="true"
            size={"lg"}
            auto
            css={{ backgroundColor: "#2d59a7" }}
          >
            Get Demo
          </Button>
        </Navbar.Content>
      </Navbar>
    </section>
  );
};

export default NavigationBar;
