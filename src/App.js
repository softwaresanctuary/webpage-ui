import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './components/logo2.png'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MainPage from './components/MainPage'
import TeamPage from './components/TeamPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

const useStyles = makeStyles((theme) => ({
btn:{
  marginRight:'3rem',
  padding:'1rem',
  color:'#f2f2f2'
},
bar: {
flexGrow: 1,
background: 'linear-gradient(45deg, #222831 40%, #393E49 95%)',
marginBottom:'4rem',
},
title: {
color:'#F0BC12',
flexGrow: 1,
},
logo:{
margin:'0 2rem',
},
}));

export default function App() {
  const classes = useStyles();

  return (
    <div style={{  background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'}}  className="root">
      <React.Fragment>
      <CssBaseline />
      <Router>
    <div className={classes.bar}>
      <AppBar  position="fixed" className={classes.bar} >
        <Toolbar>
        <img classNAme={classes.logo} src={logo} alt="logo" className={classes.logo} />
          
          <Typography variant="h6" className={classes.title}>
            SOFTWARE SANCTUARY
          </Typography>
          <Link to="/">
          <Button className={classes.btn} color="inherit"> Home </Button>
          </Link>
          <Link to="/team">
          <Button className={classes.btn} color="inherit"> Team </Button>
          </Link>
          <Link to="/contact">
          <Button className={classes.btn} color="inherit"> Contact </Button>
          </Link>
          <Link to="/about">
          <Button className={classes.btn} color="inherit"> About </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path="/" component={MainPage}>
        
          </Route>
          <Route exact path="/team" component={TeamPage}>

          
          </Route>
          <Route exact path="/contact" component={ContactPage}>
        
          </Route>
          <Route path="/about" component = {AboutPage}>
          
          </Route>

        </Switch>
    </div>
    </Router>
      </React.Fragment>
    </div>
  );
}
