import React, { Component } from 'react';

function Gallery(params) {
    var animate = ""; 
    return(
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex w-full mb-20 flex-wrap">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">We provide best environment for body building</h1>
                <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class={`${animate}w-full object-cover h-full object-center block`} src="https://source.unsplash.com/weekly?gym/500x300"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class={`${animate}w-full object-cover h-full object-center block`} src="https://source.unsplash.com/weekly?exercise/501x301"/>
                    </div>
                    <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class={`${animate}w-full h-full object-cover object-center block`} src="https://source.unsplash.com/weekly?dumbbell/600x360"/>
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class={`${animate}w-full h-full object-cover object-center block`} src="https://source.unsplash.com/weekly?bodybuilding/601x361"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class={`${animate}w-full object-cover h-full object-center block`} src="https://source.unsplash.com/weekly?muscular/502x302"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class={`${animate}w-full object-cover h-full object-center block`} src="https://source.unsplash.com/weekly?gym/503x303"/>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}


export default Gallery;