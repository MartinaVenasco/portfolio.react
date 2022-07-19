import "./index.css";
import logo from "../logo.svg";
import mia from "../mia.jpg"
const Navbar = () => {
  return (
    <div className="main-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="main-nav">
        <li className="button">Home</li>
        <li className="button">Portfolio</li>
        <li className="button">Contact</li>
      </ul>
      <button>Message</button>
    </div>
  );
};
const Main = () => {
  return (
    
      <section className="main-section">
        <h1>Martina Venasco</h1>
        <img src={mia} className="App-logo" alt="logo" />
        <h2>about me</h2>
        <p>
          I am a visual communication designer. I own a complete knowledge of
          the different graphic techniques related to the Adobe software tools.
          Expert in visual communication and specialized in creation of logos,
          brands and related corporate image. Average knowledge of web
          development tools, I'm studying to employ my web development skills,
          improving Js, React etc. Precise, punctual in the delivery of the
          tables commissioned and motivated by strong passion for this
          profession and in particular for advertising in general. My goal is to
          find the heart and values of each project, so as to creating the best
          graphics to represent it.
        </p>
      </section>
  
  );
};

export { Navbar, Main };
