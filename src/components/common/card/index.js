import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => (
	{
		title:{
			color:'#F0BC12',
		},
		mainFeaturedPost: {
			backgroundColor: theme.palette.grey[900],
			color: theme.palette.common.white,
		},
		mainFeaturedPostContent: {
			padding: theme.spacing(3),
		},
	}
));

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
						<Typography 
							className={classes.title} 
							component="h1" 
							variant="h3" 
							Color="inherit" 
							gutterBottom>
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