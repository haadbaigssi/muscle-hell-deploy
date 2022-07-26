import React, { Component } from 'react';
import dumbbell from '../assets/dumbbell.svg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom'
function Navbar(params) {
    return(
        <header class="text-gray-400 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <img style={{backgroundColor:'white' }} width='40px' src={dumbbell} alt="Girl in a jacket"/>
              <Link to="/"><span class="ml-3 text-gray-700 text-xl">Muscle Hell</span></Link>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <Link to="/contact"><a class="mr-5 hover:text-gray-900">Contact</a></Link>
              <Link to="/gallery"><a class="mr-5 hover:text-gray-900">Gallery</a></Link>
              <Link to="/ourteam"><a class="mr-5 hover:text-gray-900" >Our Team</a></Link>
              <Link to="/subscription"><a class="mr-5 hover:text-gray-900">Subscriptions</a></Link>
            </nav>
            <button class="inline-flex items-center  text-2xl border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0">
                Buy Subscription
                <ArrowForwardIosIcon style={{margin:'5px 0px 0px 5px'}} />
            </button>
          </div>
        </header>
    );
}

export default Navbar;