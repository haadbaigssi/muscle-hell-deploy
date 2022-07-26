import React, { Component } from 'react';

const StatDetails = (props) => {
    return(
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-yellow-300">{props.count}</h2>
                <p class="leading-relaxed text-white">{props.title}</p>
            </div>
    )
}

function Statistics(params) {
    var animate = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
    return(
        <section class="text-gray-600 bg-red-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div class="w-full sm:p-4 px-4 mb-6">
                    <h1 class="title-font font-medium text-xl mb-2 text-yellow-300">We have a family of trusted customers and trainers.   </h1>
                    <div class="leading-relaxed text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                
                <StatDetails count="2.7k" title="Daily Customers" />
                
                <StatDetails count="1.8k" title="Subscribers" />
                
                <StatDetails count="36" title="Trainers"/>
                
                <StatDetails count="4" title="Branches"/>
                
                </div>
                <div class="transition lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class={`${animate} object-cover object-center rounded`} src="https://source.unsplash.com/600x300/?bodybuilding" alt="stats" />
                </div>
            </div>
        </section>
    );
}

export default Statistics;