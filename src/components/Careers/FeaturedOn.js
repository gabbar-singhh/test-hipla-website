const FeaturedOn = () => {
  return (
    <div className="section-1">
      <div className="container ">
        <p className="heading-1">AS FEATURED ON</p>
        <div className="text-center flex flex-coloum">
          <img
            className="space1"
            src={"/vectors/featured1.svg"}
            alt="office1-logo-hipla"
          />
          <img
            src={"/vectors/featured2.svg"}
            className="space1"
            alt="office1-logo-hipla"
          />
          <img
            src={"/vectors/featured3.svg"}
            className="space1"
            alt="office1-logo-hipla"
          />
          <img
            src={"/vectors/featured4.svg"}
            className="space1"
            alt="office1-logo-hipla"
          />
          <img
            src={"/vectors/featured5.svg"}
            className="space1"
            alt="office1-logo-hipla"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
