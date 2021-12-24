import pic1 from '../images/cat_image1_desktop.png';

function Top() {
  return (
    <div className="row justify-content-center top-container">
      <div className="col-sm-6">
        <h2>Treat your pet (and you).</h2>
        <h2>It's on us!</h2>
        <br/>
        <h5>Treat your pet to a healthy treat for <strong>free</strong> to kick off your Public Goods trial membership.</h5>
        <br/>


        <h5><strong>See what it's like to be a Public Goods member.</strong></h5>
        <br/>

        <ul>
            <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our enitre collection of sustainable essentials</li>
            <br/>

            <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
        </ul>
        <br/>


        <h6 className="offer-button" onClick={console.log("I've been clicked!")} >Claim your free offer</h6>

      </div>
      <div className="col-sm-6">
        <img src={pic1} className="desktop-pic" />
      </div>
    </div>
  );
}

export default Top;
