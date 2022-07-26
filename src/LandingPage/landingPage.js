import React, { Component } from 'react';
import Hero from './hero';
import Gallery from './gallery';
import Statistics from './statistics';
import Footer from './footer';
import {Divider, Grid} from '@material-ui/core'

function LandingPage() {
    return(
        <Grid container direction='column'>
            <Grid item xs={12}>
            <Hero/>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <Gallery/>
            </Grid>
            <Grid item xs={12}>
                <Statistics/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}

export default LandingPage;