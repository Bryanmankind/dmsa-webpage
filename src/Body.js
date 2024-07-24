import React from 'react';
import Logo from "./image/Logo.png";
import DIVINE_3 from "./image/DIVINE_3.jpg";
import DIVINE_1 from "./image/DIVINE_1.jpg";
import DIVINE_2 from "./image/DIVINE_2.jpg";


export function Body () {
    return (
      <div class="container">
          <div id="imgs">
              <img class="active-0 active" src={Logo} alt='log'/>
              <img class="active-1 hidden" src={DIVINE_3} alt='logo'/>
              <img class="active-2 hidden" src={DIVINE_1} alt='log'/>
              <img class="active-3 hidden" src={DIVINE_2} alt='log'/>
          </div>
  
          <div class="welcome">
              <h1>WELCOME TO <span>CHURCH</span></h1>
              <p>Welcome to Divne Mercy Seat Assembly. <br/> We love you and we're glad you made it here.</p>
          </div>
      </div>
    )
  }