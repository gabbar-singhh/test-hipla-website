const Principles = () => {
  return (
    <>
      <div class="section-2">
        <div class="container">
          <h4 class="heading-2 ">Our Guiding Principles</h4>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="row">
                <div class=" col-md-1 col-sm-1 col-1">
                  <div>
                    <img
                      src={"/vectors/tick.svg"}
                      alt="Arrow-logo-hipla"
                      class="tick"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 col-10">
                  <h5 class="title2">Think Big</h5>
                  <p class="p-0 paragraph1">
                    To raise the bar for how a billion+ people interact with
                    their workplace -{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Think Big, build the unforgettable
                    </span>
                  </p>
                </div>
              </div>

              <div class="row gap1">
                <div class=" col-md-1 col-sm-1 col-1">
                  <div>
                    <img
                      src={"/vectors/tick.svg"}
                      alt="Arrow-logo-hipla"
                      class="tick"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 col-10">
                  <h5 class="title2">Work smart</h5>
                  <p class="p-0 paragraph1">
                    We hustle to give our community the best. Following standard
                    management and task charts just doesn't cut it.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-12">
              <div class="row">
                <div class=" col-md-1 col-sm-1 col-1">
                  <div>
                    <img
                      src={"/vectors/tick.svg"}
                      alt="Arrow-logo-hipla"
                      class="tick"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 col-10">
                  <h5 class="title2">Break things along the way</h5>
                  <p class="p-0 paragraph1">
                    Walking along unchartered woods, leave a trail of cut
                    branches. We encourage our team to swing, break, learn and
                    innovate.
                  </p>
                </div>
              </div>

              <div class="row gap2">
                <div class="col-md-1 col-sm-1 col-1">
                  <div>
                    <img
                      src={"/vectors/tick.svg"}
                      alt="Arrow-logo-hipla"
                      class="tick"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 col-10">
                  <h5 class="title2">Have fun </h5>
                  <p class="p-0 paragraph1">
                    But without a loving team and an empathetic workplace,
                    nothing seems worth it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <img
          src={"/vectors/career-cover.svg"}
          alt="Arrow-logo-hipla"
          class="img-fluid"
        />
      </div>
    </>
  );
};

export default Principles;
