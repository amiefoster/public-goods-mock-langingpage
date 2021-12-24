import pic2 from "../images/cat_treats_fd_minnows_01 3.png";

function Middle() {
  return (
    <div className="row justify-content-center treat-container">
      <h6 className="treat-container-text">
        <strong>OUR TREAT</strong>
      </h6>
      <div className="col-sm-6">
        <img src={pic2} className="treat-pic"/>
        <div className="treat-text">
        <h5>
          <strong>Freeze Dried Minnows</strong>
        </h5>
        <h6>Healthy ingredients with nothing to hide.</h6>
        </div>
      </div>
      <div className="col-sm-6">
        <img src={pic2} className="treat-pic"/>
        <div className="treat-text">
        <h5>
          <strong>Freeze Dried Minnows</strong>
        </h5>
        <h6>Healthy ingredients with nothing to hide.</h6>
        </div>
      </div>
    </div>
  );
}

export default Middle;
