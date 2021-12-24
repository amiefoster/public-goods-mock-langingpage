import pic2 from '../images/cat_image2_desktop.png';
import check from '../images/check.png'

function Bottom() {
  return (
    <div className="row justify-content-center bottom-container">
      <div className="col-sm-6">
        <img src={pic2} className="desktop-pic" />
      </div>
      <div className="col-sm-6 bottom-text">
        <h6>PET-APPROVED</h6>
        <h5>
          <strong>It feels good to be a member.</strong>
        </h5>
        <h5>
          After your free trial, become a full-time member with benefits for $59
          a year.
        </h5>

        <div>
          <h5>
            <span>
              <img className="check" src={check} />  Cancel anytime during your free trial.</span>
          </h5>
          <h5>
            <span>
            <img className="check" src={check} />  Free shipping on orders over $45.</span>
          </h5>
          <h5>
            <span>
            <img className="check" src={check} />  Direct-to-consumer proces on hundreds of premium products.
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
