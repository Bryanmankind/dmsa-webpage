import './App.css';
import Logo from "./image/Logo.png";
import DIVINE_3 from "./image/DIVINE_3.jpg";
import DIVINE_1 from "./image/DIVINE_1.jpg";
import DIVINE_2 from "./image/DIVINE_2.jpg";
import blog from "./image/blog.webp";
import { Information } from './Information';
import { PrayerRequest } from './PrayerRequest';
import { Footer } from './Footer'; 

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
      <PrayerRequest/>
      <Information/> 
      <Blog/>
      <Programs />
    </div>  
  );
}

function Navbar () {
  return (
    <div class="Navbar">
        <nav>
            <div class="logo">
                <img src={Logo} alt='Logo'/>
            </div>
            <div class="header">
                <ul><li><a href="index.html">HOME</a></li></ul>
                <ul><li><a href="programs.html">PROGRAMS</a></li></ul>
                <ul><li><a href="about.html">ABOUT US</a></li></ul>
                <ul><li><a href="give.html">GIVE</a></li></ul>
                <ul><li><a href="blog.html">BLOG</a></li></ul>
            </div>
            <div>
                <button id="nav-but">MEMBERSHIP</button>
            </div>
        </nav>
    </div>
  )
}

function Body () {
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

function Blog () {
  return (
    <div class="blog" >
    <div class="blog-row" >
        <div class="blog-col-1">
            <img src={blog} alt=''/>
        </div>
        <div class="blog-col-2">
            <h1 class="Sub-title">Weekly Inspirational Messages</h1> 
            <p> Same Power!

                Ephesians 1:19 - 20 AMPC

                And [so that you can know and understand] what is the immeasurable and unlimited and surpassing greatness of His power in and for us who believe, as demonstrated in the working of His mighty strength, Which He exerted in Christ when He raised Him from the dead and seated Him at His [own] right hand in the heavenly [places],
                
                Our faith in Christ is baseless without the resurrection. We often sing, preach, teach, and shout about the resurrection of Jesus with a tone of finality. The challenge is that we refer to this incident as an event of the past.
                
                The resurrection power is alive and active inside of us today as it was when God raised Christ from the dead 2000 years ago. The resurrection power is a Spirit and He is called the Holy Spirit or Spirit of Holiness. We are human beings on God's level.
                
                WORDS OF WISDOM
                
                Imagine this for a moment a man carrying inside of him a volume of power commensurate with 33-66kv of power. That man will be a mobile wake of disaster and tragedy as he moves. He will dry up human beings, burn down houses, and leave entire cities in ruin. The  Same power can produce great positive results in every aspect of society when properly channeled. What we have inside of the believer is God's exceeding great, incomparable and boundless power in the Holy Spirit.
                
                The Holy Spirit is the power above all powers. He brought down the army of hell and horses of demons on their knees at the resurrection. Also, He turned the ripped body of Jesus into an immortal one. With the Holy Spirit in us, we can bring answers and solutions that will befuddle the human imagination. Do you know this power?
                
                Declare
                
                Holy Spirit thank you for taking hold of my life. You are at work in me doing the work of Jesus, extraordinarily. Hallelujah!
                
            </p>
        </div>
    </div>
</div>
  )
}

function Programs () {
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


export default App;
