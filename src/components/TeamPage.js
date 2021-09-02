import React from 'react';
import Grid from '@material-ui/core/Grid';
import Nav from "./AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './card'
import Footer from './Footer';

export default function TeamPage() {
    return (
        <div>
            <Nav/>
            <div style={{  background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'}}  className="root">
      <React.Fragment>
      <CssBaseline />
      <Nav/>
      <Container fixed>
      <Grid container spacing ={12} >
      </Grid>
      <Grid container spacing ={4} >
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'Umut Bozbek'}
      paragraph={'Lorem ipsum dolor sit amet.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'Tarık'}
      paragraph={'Lorem ipsum dolor sit.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'GÖKHAN TAMKOÇ'}
      paragraph={'Lorem ipsum dolor sit amet.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'Baransel Oral'}
      paragraph={'Lorem ipsum dolor sit amet.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'Randominsan1'}
      paragraph={'Lorem ipsum dolor sit amet.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <Card
      title={'Randominsan2'}
      paragraph={'Lorem ipsum dolor sit amet.'}
      link={'Lorem, ipsum dolor.'}
      href={'#'}
      />
      </Grid>
      </Grid>     
      
      </Container>
      <Footer title="Footer" description="Lorem ipsum dolor sit amet"/>
      </React.Fragment>
    </div>
        </div>
    )
}
