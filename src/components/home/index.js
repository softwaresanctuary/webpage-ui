import React from 'react';

import {
	Container,
	Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../common/card';
import MainCard from './mainCard'

const useStyles = makeStyles((theme) => (
	{
		root: {
			bottom: 0,
			backgroundColor: '#393E49',
			padding: '20px'
		},
	}
));

export default function Home() {
	const classes = useStyles();
	return (
    		<div className={classes.root}>
			<Container>
      			<Grid container spacing ={12}>
      			</Grid>
      			<Grid container spacing ={4}>
      				<Grid item xs={12} sm={12} lg={12}>
		     			<MainCard />
					</Grid>
      				<Grid item xs={12} sm={12} lg={12}>		
      					<Card
      						title={'Welcome'}
      						paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque, voluptas ipsam excepturi, velit, eaque quae accusamus praesentium dicta impedit architecto dolores error numquam? Ratione aperiam at totam repellendus consequuntur!'}
      						link={''}
      						href={'#'}
      						/>     
					</Grid>
				</Grid>            
			</Container>
    		</div>
	);
}
