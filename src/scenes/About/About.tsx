import {Container, Typography} from '@mui/material';
import styles from './About.module.css';

function About() {
  return (
      <Container className={styles.aboutContainer}>
        <div className={styles.left}>
          <Typography variant="h2">Hi, I'm Pam! I'm a software engineer in Chicago.</Typography>
          <Typography>
            I was born and raised on the northwest side, and now I call this vibrant corner of the city home again, living here with my husband, Peter, and our dog, Azul.
            After studying Sociology and Women's Studies in college, I made a career switch, venturing into the tech world.
            I began my journey as a web developer in 2016, working my way into software engineering.
            I'm "self-taught," though I had amazing friends and mentors helping me along the way.
            I spent my early years in the world of CMSs, which molded my full-stack mindset.
            My mission is to harness tech for positive change, guided by values like innovation and collaboration. 
            Thanks for dropping by!
          </Typography>
        </div>
        <div className={styles.right}>right</div>
      </Container>
  );
}
export default About;