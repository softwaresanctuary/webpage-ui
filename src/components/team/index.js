import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	Grid
} from '@material-ui/core';

import Card from '../common/card';

const useStyles = makeStyles((theme) => (
	{
		root:{
			background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'
		},
	}
));

export default function Team() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<Grid container spacing ={4} >
					<Grid item xs={12} sm={6}>
						<Card
							title={'Umut Bozbek'}
							paragraph={'Lorem ipsum dolor sit amet.'}
							link={'Lorem, ipsum dolor.'}
							href={'#'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
							title={'Tarık'}
							paragraph={'Lorem ipsum dolor sit.'}
							link={'Lorem, ipsum dolor.'}
							href={'#'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
							title={'Gökhan Tamkoç'}
							paragraph={'Lorem ipsum dolor sit amet.'}
							link={'Lorem, ipsum dolor.'}
							href={'#'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
							title={'Baransel Oral'}
							paragraph={'Lorem ipsum dolor sit amet.'}
							link={'Lorem, ipsum dolor.'}
							href={'#'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
						title={'Randominsan1'}
						paragraph={'Lorem ipsum dolor sit amet.'}
						link={'Lorem, ipsum dolor.'}
						href={'#'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
						title={'Randominsan2'}
						paragraph={'Lorem ipsum dolor sit amet.'}
						link={'Lorem, ipsum dolor.'}
						href={'#'} />
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}
