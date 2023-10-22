import './About.css';
import image from './skateboard.gif';

const aboutText = 
  "I was born and raised on the northwest side, and now I call this corner of the city home again, living here with my family and our dog, Azul. I studied Sociology and Women's Studies in undergrad and after college worked service-industry jobs until I made a career switch, venturing into the tech world. I began my journey as a web developer in 2016, working my way into software engineering. I'm self-taught, though I had amazing friends and mentors helping me along the way. As a web developer, I spent my early years in the world of CMSs, which molded my full-stack mindset. I love seeing a feature through from front to back. I enjoy a hands on approach from planning through to implementation and short feedback loops that inform process. My mission is to harness tech for positive change, guided by values like innovation and collaboration. Thanks for dropping by!"

const About = () => {
  return (
      <div className="aboutContainer">
        <div className="left">
          <h2>Hi, I'm Pam! I'm a software engineer in Chicago.</h2>
          <p>{aboutText}</p>
        </div>
        <div className="right"><img className="image" src={image}/></div>
      </div>
  );
}
export default About;