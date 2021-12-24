import Top from "./top";
import Middle from "./middle";
import Bottom from "./bottom";
import "../App.css";

function App() {
  return (
    <div className="container justify-content-center landing-page">
      <div className="row">
        <Top />
        <Middle />
        <Bottom />
      </div>
    </div>
  );
}

export default App;

//These are the things I would work on given more time. 

  //Web page
    //Cleaning up page margins and making sure each section (top, mid, bottom) are lined up properly. I used bootstrap for my grid so I would start with messing around with that to clean up the margins. 
    //Better display pictures to be more dynamic with screen size.
  
  //Mobile
    //I ran out of time to get to the mpbile site. I like using the bootstrap grid because it scales down to mobile well. 
    //I would have to add the navigation bar to render in conditionally based on the screen size. 
    //I would grab the icons from icons8 or materialUI
    //I would also have to conditionally add in the "offer button" based on screen size
    //To get the button to stick to the bottom I would use CSS and probably start with 
      //padding-bottom: 0; position: fixed; bottom: 0; width: 100%; and center the text
      //id also have to add a margin to the bottom of the page so the button doesnt hide any content
      //id use the same colors as the web button
    //from there id mess around with the CSS a bit more to make sure it was staying fixed and in the correct position
    //lastly I would also conditionally render the two divs in the middle (with the treats) based on screen size. 

    //That is where I would start. I dont have too much experience with mobile obtimization but I know its something that I can catch on to really quickly. :) 