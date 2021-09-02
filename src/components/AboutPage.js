import React from 'react';
import Grid from '@material-ui/core/Grid';
import Nav from "./AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './card'
import Footer from './Footer';



export default function AboutPage() {

  return (
    <div style={{  background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'}}  className="root">
      <React.Fragment>
      <CssBaseline />
      <Nav/>
      <Container fixed>
      <Grid container spacing ={12} >
      </Grid>
      <Grid container spacing ={4} >
      <Grid item xs={12} sm={12} lg={12}>

      <Card
      title={'About Us'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.'}
      link={'Lorem ipsum dolor sit amet'}
      href={'#'}/>
      
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
      <Card
      title={'Our Mission'}
      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ducimus quia ipsa dolores veniam, eos odit sit dolor, culpa labore optio rerum possimus qui aliquam minus? Ipsam, molestias quasi.'}
      link={'afsdaf'}
      href={'#'}
      />
      </Grid>
      
      </Grid>
      
      
      </Container>
      <Footer title="Footer" description="Lorem ipsum dolor sit amet"/>
      
      </React.Fragment>
     
    </div>
  );
}

