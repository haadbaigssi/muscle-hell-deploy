import React, { Component } from 'react';
import Buttons from '../components/button'
function Hero(params) {
    var animate = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
    return(
        <section class="text-gray-400 bg-red-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl text-yellow-300 mb-4 font-medium">Everybody needs a tune-up
                <br/>
            </h1>
            <p class="mb-8 leading-relaxed text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            <div class="flex justify-center">
            <div class="py-2"></div>
                <Buttons  title='Login' bcolor='' bHoverColor='red-600' tcolor='white'/>
                <div class="py-2 px-2"></div>
                <Buttons title='Sign up' bcolor='' bHoverColor='yellow-400' tcolor='white' />
            </div>
            </div>
            <div class="transition lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class={`${animate} object-cover object-center rounded`} alt="hero" src="https://source.unsplash.com/weekly?gym/400x500"/>
            </div>
        </div>
        </section>
    );
}

export default Hero;