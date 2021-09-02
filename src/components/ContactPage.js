import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nav from "./AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Card,CardContent,TextField } from '@material-ui/core';
import Footer from './Footer'

export default function TeamPage() {
    return (
        <div>
            <Nav/>
            <div style={{  background: 'linear-gradient(180deg, #222831 40%, #22283f 95%)'}}  className="root">
      <React.Fragment>
      <CssBaseline />
      <Nav/>
      <Container fixed>
      <Card style={{background:'#A3A3A3',margin:'4rem 0',padding:'1rem',}}>
            <CardContent >
            <Grid  container spacing={1}>
            <Grid item xs={12} sm={12}  >
             <h2 style={{margin:'1rem auto'}}>Contact Us</h2>
             </Grid>
            
            <Grid item xs={12} sm={6}  >
             <TextField style={{textDecorationColor:'#fff'}} label='First Name' placeholder='Enter First Name' variant='outlined' fullWidth />
             </Grid>
            <Grid item xs={12} sm={6}  >
             <TextField label='Last Name' placeholder='Enter Last Name' variant='outlined' fullWidth />
             </Grid>
            <Grid item xs={12}  >
             <TextField label='E-Mail' placeholder='Enter E-Mail' variant='outlined' fullWidth />
             </Grid>
            <Grid item xs={12}  >
             <TextField label='Phone' placeholder='Enter Phone' variant='outlined' fullWidth />
             </Grid>
            <Grid item xs={12}  >
             <TextField label='Message' multiline rows={4} placeholder='Enter Message' variant='outlined' fullWidth />
             </Grid>
            <Grid item xs={12}  >
             <Button type='submit' variant='contained' style={{backgroundColor:'#22283f'}} fullWidth >Submit</Button>
             </Grid>
             </Grid>
            </CardContent>
      </Card>
      </Container>
      <Footer title="Footer" description="Lorem ipsum dolor sit amet"/>
      </React.Fragment>
     
      

    </div>
        </div>
    )
}
