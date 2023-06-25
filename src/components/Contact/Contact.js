import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="section-1x">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-12">
              <div class="boxx-1">
                <h5>Contact us</h5>
                <p>Let our team help adress your requests/queries.</p>
                <div class="row boxx-2">
                  <div class="col-md-1 col -1 pr-0 " style={{ width: "22px" }}>
                    <img src={"/vectors/tick.svg"} />
                  </div>
                  <div class="col-md-10 col-10" style={{ paddingLeft: "22px" }}>
                    <p class="title">Demo request </p>
                  </div>
                </div>
                <div class="row boxx-3">
                  <div class="col-md-1 col -1 pr-0 " style={{ width: "22px" }}>
                    <img src={"/vectors/tick.svg"} />
                  </div>
                  <div class="col-md-10 col-10" style={{ paddingLeft: "22px" }}>
                    <p class="title">Pricing queries </p>
                  </div>
                </div>

                <div class="row boxx-4">
                  <div class="col-md-1 col -1 pr-0 " style={{ width: "22px" }}>
                    <img src={"/vectors/tick.svg"} />
                  </div>
                  <div class="col-md-10 col-10" style={{ paddingLeft: "22px" }}>
                    <p class="title">Custom use case request </p>
                  </div>
                </div>
                <p class="extraa-1">
                  For any other queries, please get in touch from here.
                </p>
              </div>
            </div>
            <div class="col-md-7 col-12 boxx-yy">
              <div class="boxx-y">
                <form>
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Full Name*"
                          class="formform"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Company Name"
                          class="formform"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Work Email Address*"
                          class="formform"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="section-3x">
                    <p>Select a topic:</p>
                    <div class="box-3x">
                      <button class="button1 text-sizee">Press Equiry</button>
                      <button class="button2 text-sizee">
                        Product details
                      </button>
                      <button class="button3 text-sizee">Pricing</button>
                      <button class="button4 text-sizee">Demo request</button>
                      <button class="button5 text-sizee">
                        {" "}
                        Technical Error
                      </button>
                      <button class="button6 text-sizee">
                        Job opportunities
                      </button>
                      <button class="button7 text-sizee">
                        Custom use case{" "}
                      </button>
                    </div>
                  </div>
                  <div class="section-5x">
                    <p class="text-1x text-sizee ">Any Message?</p>
                    <p
                      class="text-1x text-sizee "
                      style={{ color: "#000000", opacity: "0.4" }}
                    >
                      Optional
                    </p>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control text-2xx">
                      What challenges you are looking to overcome with Hipla
                    </textarea>
                  </div>
                  <p class="text-4xx">
                    By clicking on “Submit”, you are accepting with our{" "}
                    <span style={{ color: "#2D59A8" }}>privacy policy. </span>{" "}
                  </p>
                  <button class="button8">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section4 ">
        <div class="container ">
          <h4 class="heading4 text-center">Our Offices</h4>
          <div class="row">
            <div class="col-md-4" style={{ marginBottom: "22px" }}>
              <div class="box">
                <img src={"/vectors/gateway.svg"}></img>
                <p class="title1">
                  Mumbai <img src={"/vectors/indian-flag.svg"}></img>
                </p>
                <div class="row">
                  <div class="col-md-1 col-1 align-items-center">
                    <img src={"/vectors/location.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address">
                      17 & 18, Platinum Techno Park,Level 3, Sector 30 Vashi
                      Mumbai 400705, India.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/telephone.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">+91 98450 70916</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/mail.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">info@hipla.io</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4" style={{ marginBottom: "22px" }}>
              <div class="box">
                <img src={"/vectors/gateway.svg"}></img>
                <p class="title1">
                  Mumbai <img src={"/vectors/indian-flag.svg"}></img>
                </p>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/location.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address">
                      17 & 18, Platinum Techno Park,Level 3, Sector 30 Vashi
                      Mumbai 400705, India.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/telephone.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">+91 98450 70916</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/mail.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">info@hipla.io</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "22px" }}>
              <div class="box">
                <img src={"/vectors/gateway.svg"}></img>
                <p class="title1">
                  Mumbai <img src={"/vectors/indian-flag.svg"}></img>
                </p>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/location.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address">
                      17 & 18, Platinum Techno Park,Level 3, Sector 30 Vashi
                      Mumbai 400705, India.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/telephone.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">+91 98450 70916</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/mail.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">info@hipla.io</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "22px" }}>
              <div class="box">
                <img src={"/vectors/gateway.svg"}></img>
                <p class="title1">
                  Mumbai <img src={"/vectors/indian-flag.svg"}></img>
                </p>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/location.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address">
                      17 & 18, Platinum Techno Park,Level 3, Sector 30 Vashi
                      Mumbai 400705, India.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/telephone.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">+91 98450 70916</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/mail.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">info@hipla.io</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" style={{ marginBottom: "22px" }}>
              <div class="box">
                <img src={"/vectors/gateway.svg"}></img>
                <p class="title1">
                  Singapore <img src={"/vectors/singapore-flag.svg"}></img>
                </p>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/location.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address">
                      17 & 18, Platinum Techno Park,Level 3, Sector 30 Vashi
                      Mumbai 400705, India.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1 col-1">
                    <img src={"/vectors/telephone.svg"}></img>
                  </div>
                  <div class="col-md-10 col-10">
                    <p class="address1">+91 98450 70916</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">
                    <img src={"/vectors/mail.svg"}></img>
                  </div>
                  <div class="col-md-10">
                    <p class="address1">info@hipla.io</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
