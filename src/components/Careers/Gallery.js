const Gallery = () => {
  return (
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-md-3 col-12 p-0">
          <div class="box1">
            <img
              src={"/vectors/career1.svg"}
              class="img-fluid"
              alt="office1-logo-hipla"
            />
          </div>
        </div>
        <div class="col-md-3 col-12 p-0">
          <div class="box2">
            <img
              src={"/vectors/career2.svg"}
              class="img-fluid"
              alt="office1-logo-hipla"
            />
          </div>
        </div>
        <div class="col-md-3 col-12 p-0">
          <div class="box3">
            <img
              src={"/vectors/career3.svg"}
              class="img-fluid"
              alt="office1-logo-hipla"
            />
          </div>
        </div>
        <div class="col-md-3 col-12 p-0">
          <div class="box4">
            <img
              src={"/vectors/career4.svg"}
              class="img-fluid"
              alt="office1-logo-hipla"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
