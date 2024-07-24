import './App.css';
import Logo from "./image/Logo.png";
import { Information } from './Information';
import {Body} from "./Body";
import { PrayerRequest } from './PrayerRequest';
import { Programs } from './Programs';
import { Blog} from './Blog';
import { Footer } from './Footer'; 

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
      <Programs />
      <PrayerRequest/>
      <Information/> 
      <Blog/>
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






export default App;

