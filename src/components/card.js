import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
}));

export default function Card(props) {
  const classes = useStyles();
  const { title , paragraph,link,href } = props;

  return (
    <Paper className={classes.mainFeaturedPost} >
      {/* Increase the priority of the hero background image */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.title} component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {paragraph}
            </Typography>
            <Link variant="subtitle1" href={href}>
              {link}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}