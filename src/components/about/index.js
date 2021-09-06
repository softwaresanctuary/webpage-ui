import React from 'react';

import {
	Container,
	Grid
 } from '@material-ui/core';

import Card from '../common/card'

export default function About() {
	return (
		<div style={{  background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'}}  className="root">
			<Container fixed>
				<Grid container spacing ={12} >
				</Grid>
					<Grid container spacing ={4} >
						<Grid item xs={12} sm={12} lg={12}>
							<Card
								title={'About Us'}
								paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.'}
								link={'Lorem ipsum dolor sit amet'}
								href={'#'} />
						</Grid>
					<Grid item xs={12} sm={12} lg={12}>
						<Card
							title={'Our Mission'}
							paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.'}
							link={'afsdaf'}
							href={'#'} />
					</Grid>
				</Grid>		
			</Container>
		</div>
	);
   }