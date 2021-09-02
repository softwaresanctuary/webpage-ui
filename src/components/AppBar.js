import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './logo2.png'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { NavLink } from 'react-router-dom'


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
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    color:'#F0BC12',
    flexGrow: 1,
  },
  logo:{
    margin:'0 2rem',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (

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
          <NavLink to="/team">
          <Button className={classes.btn} color="inherit"> team </Button>
          </NavLink>
          <NavLink to="/contact">
          <Button className={classes.btn} color="inherit"> Contact </Button>
          </NavLink>
          <NavLink to="/about">
          <Button className={classes.btn} color="inherit"> About </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      
    </div>

  );
}


