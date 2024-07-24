import DIVINE_3 from "./image/DIVINE_3.jpg";
import DIVINE_1 from "./image/DIVINE_1.jpg";
import DIVINE_2 from "./image/DIVINE_2.jpg";

export function Programs () {
    return (
      <div class="programs">
          <div class="sections-1">
              <div class="section-1-left">
                <img src={DIVINE_3} alt=''/>
              </div>
              <div class="section-1-right">
                  <h1>VICTORY HOUR SERVICE</h1>
                <p>Join us every Sunday for Victory Hour Service, a powerful session dedicated to enriching your spiritual journey. 
                   Through enlightening teachings, genuine worship, and miraculous encounters, we seek to align ourselves with God's divine direction for our lives.
                   This Sunday gathering is infused with the Holy Spirit, uplifting your soul and connecting you to the presence of the Lord.
                </p>
              </div>  
          </div>
          <div class="sections-2">
              <div class="section-2-left">
                  <h1>RHEMA HOUR SERVICE</h1>
                  <p>Join us every Tuesday for Rhema Hour, a transformative Bible study experience guided by our lead pastor.
                      A profound teachings of Jesus in an atmosphere of simplicity and enlightenment. 
                      It's a delightful opportunity to cultivate your faith and deepen your understanding.</p>
              </div>
              <div class="section-2-right">
                  <img src={DIVINE_1} alt='' />
                  
              </div>  
          </div>
          
          <div class="sections-1">
              <div class="section-1-left">
                <img src={DIVINE_2}  alt=''/>
              </div>
              <div class="section-1-right">
                  <h1>SHOWERS OF MERCY</h1>
                <p>Join us every Saturday for Showers of Mercy, a powerful prayer intercessory meeting where we unite in fervent supplication.
                   Together, we hold steadfast belief in our hearts for the manifestation of answers to prayers and the sharing of testimonies.
                   It's a gathering filled with hope, faith, and the assurance of God's merciful grace.</p>
              </div>  
          </div>
          
      </div>
  
    )
  }
  