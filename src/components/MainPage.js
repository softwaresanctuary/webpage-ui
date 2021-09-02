import React from 'react';
import Grid from '@material-ui/core/Grid';
import Nav from "./AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './card'
import MainCard from './mainCard'
import Footer from './Footer';

export default function MainPage() {

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

      <MainCard/>
      
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
      <Footer title="Footer" description="Lorem ipsum dolor sit amet"/>
      </React.Fragment>
    </div>
  );
}
