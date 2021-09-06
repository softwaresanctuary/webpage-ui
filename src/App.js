import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from './components/logo2.png'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import Team from './components/team'
import Footer from './components/common/footer/';

const useStyles = makeStyles((theme) => (
	{
		root: {
			background: '#393E49',
			margin: 0,
			padding: 0,
			marginBottom: 0
		},
		box: {
			marginTop: "64px",
			color: "white",
			background: "#393E49",
			display: "block",
			'&::after': {
				content: '',
				display: 'block',
			}
		},
		btn:{
			marginRight:'3rem',
			padding:'1rem',
			color:'#F2F2F2'
		},
		menu: {
			flexGrow: 1,
			background: '#393E49',
		},
		title: {
			color:'#F0BC12',
			flexGrow: 1,
		},
		logo:{
			margin:'0 2rem',
		},
		footer: {
			marginBottom: 0
		}
	}
));

export default function App() {
	const classes = useStyles();
  	return (
		<div className={classes.root}>
			<Router className={classes.content}>
				<AppBar position="fixed" className={classes.menu}>
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
				<Box display="flex" flex="1" justifyContent="space-around" className={classes.box}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/team" component={Team} />
						<Route exact path="/contact" component={Contact} />			
						<Route exact path="/about" component = {About} />
					</Switch>
				</Box>
			</Router>
			<Footer className={classes.footer}/>
		</div>
  	);
}
