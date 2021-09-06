import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => (
	{
		root: {
			backgroundColor: '#393E49',
			padding: '20px',
			color: '#393E49',
			maxHeight: '120px',
		},
	}
));

export default function Footer(props) {
	const classes = useStyles();
  	const { description, title } = props;  
	return (
    		<footer className={classes.root}>
      		<Container>
				<Typography variant="h4" align="center" gutterBottom>
					{title}
				</Typography>
				<Typography variant="subtitle1" align="center" color="textPrimary">
					{description}
				</Typography>
				<Copyright />
      		</Container>
    		</footer>
 	);
}

Footer.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
};

function Copyright() {
  	return (
    	<Typography variant="body2" color="textPrimary" align="center">
      	{'Copyright © '}
      		<Link color="inherit" href="#">
        			Software Sanctuary
      		</Link>{' '}
      		{new Date().getFullYear()}
      	{'.'}
    </Typography>
  );
}