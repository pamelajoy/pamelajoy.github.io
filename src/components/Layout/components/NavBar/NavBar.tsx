import { Link } from "react-router-dom";
import {AppBar, Container, Toolbar, Typography}  from '@mui/material';
import styles from './NavBar.module.css';

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
      <Toolbar>
        <Typography variant="h4" className={styles.logo}>
          Pamela Joy Reale
        </Typography>
          <div className={styles.navlinks}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/about" className={styles.link}>
              About
            </Link>
            <Link to="/blog" className={styles.link}>
              Blog
            </Link>
          </div>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;