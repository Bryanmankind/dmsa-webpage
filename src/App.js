import './App.css';
import Logo from "./image/Logo.png";
import DIVINE_3 from "./image/DIVINE_3.jpg";
import DIVINE_1 from "./image/DIVINE_1.jpg";
import DIVINE_2 from "./image/DIVINE_2.jpg";

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      
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

export default App;
