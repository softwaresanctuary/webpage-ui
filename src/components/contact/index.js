import React from 'react';

import {
	Button,
	Card, 
	CardContent,
	Container,
	Grid,
	TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => (
	{
		root: {
			bottom: 0,
			backgroundColor: '#393E49',
			padding: '20px',
			color: '#393E49',
			maxHeight: '120px',
		},
		card: {
			background:'#A3A3A3'
		},
		firstNameField: {
			textDecorationColor:'#fff'
		},
		submitButton: {
			backgroundColor:'#22283f',
			color: '#FFFFFF'
		}
	}
));

export default function Contact() {
	const classes = useStyles();
	return (
		<div>
			<Container>
				<Card className={classes.card}>
					<CardContent >
						<Grid  container spacing={1}>
							<Grid item xs={12} sm={12}>
								<h2 style={{margin:'1rem auto'}}>Contact Us</h2>
							</Grid>  
							<Grid item xs={12} sm={6}>
								<TextField className={classes.firstNameField} label='First Name' placeholder='Enter First Name' variant='outlined' fullWidth />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField label='Last Name' placeholder='Enter Last Name' variant='outlined' fullWidth />
							</Grid>
							<Grid item xs={12}>
								<TextField label='E-Mail' placeholder='Enter E-Mail' variant='outlined' fullWidth />
							</Grid>
							<Grid item xs={12}>
								<TextField label='Phone' placeholder='Enter Phone' variant='outlined' fullWidth />
							</Grid>
							<Grid item xs={12}  >
								<TextField label='Message' multiline rows={4} placeholder='Enter Message' variant='outlined' fullWidth />
							</Grid>
							<Grid item xs={12}  >
								<Button 
									type='submit' 
									variant='contained'
									className={classes.submitButton}
									fullWidth >
									Submit
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Container>
		</div>
	)
}
