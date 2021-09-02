import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import logo from './logo.png'

const useStyles = makeStyles((theme) => ({
  title:{
    color:'#F0BC12',
  },
  mainFeaturedPost: {
    
    margin:'1rem',
    position: 'relative',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#393E49',
    
    border:'1px solid #222831',
  },
  mainFeaturedPostContent: {

    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5),
      paddingRight: 0,
    },
  },
  logo:{
      position:'relative',
      height:'12rem',
      margin:'3rem'
  }
}));

export default function MainCard() {
  const classes = useStyles();


  return (
    <Paper className={classes.mainFeaturedPost} >
      {/* Increase the priority of the hero background image */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div  className={classes.mainFeaturedPostContent}>
            <Typography className={classes.title}  component="h1" variant="h3" color="#F0BC12
" gutterBottom>
            Sanctuary Software Studio
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
            Sanctuary Software Studio, Inc. is a professional services firm specializing in software development and digital media production. Our multi-disciplinary team works with scientific and engineering enterprises to reach new markets, modernize product offerings and transform business models.

Our production-centric environment is part art studio and part laboratory, enabling our staff members to quickly apply their individual expertise to your problem domain and cohesively support your development team.
            </Typography>
            <Link variant="subtitle1" href="#">
              Lorem, ipsum.
            </Link>
          </div>
        </Grid>
        <Grid item md={4}>
        <img className={classes.logo} src= {logo} alt="" />
        </Grid>
      </Grid>
    </Paper>
  );
}