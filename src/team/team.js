import React, { Component } from 'react';
import faker from 'faker'
import Heading from '../components/heading';

function TeamName(props){
    return(
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.avatar} />
                <div class="flex-grow">
                    <h2 class="text-yellow-300 title-font font-medium">{props.name}</h2>
                    <p class="text-white">{props.designation}</p>
                </div>
            </div>
        </div>
    );
}

const Team = () => {
    return(
        <section class="text-gray-600 bg-red-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <Heading title="Out Team" />
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div class="flex flex-wrap -m-2">
            {
                [
                    0,0,0,0,0
                ].map(({ name, designation }) => (
                    <TeamName name={faker.name.findName()} designation={faker.name.jobTitle()} avatar={faker.image.avatar()} />
                ))
            }
            {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
                <div class="flex-grow">
                    <TeamName name="Henry Letham" designation="Executive" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
                <div class="flex-grow">
                    <TeamName name="Oskar Blinde" designation="Senior Trainer" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
                <div class="flex-grow">
                    <TeamName name="John Doe" designation="Body Builder" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
                <div class="flex-grow">
                    <TeamName name="Martin Eden" designation="Body Builder" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
                <div class="flex-grow">
                    <TeamName name="Boris Kitua" designation="Assistant Trainer" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
                <div class="flex-grow">
                    <TeamName name="Atticus Finch" designation="Assistant Trainer" />    
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
                <div class="flex-grow">
                    <TeamName name="Sysrem" designation="Trainer" />
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
                <div class="flex-grow">
                    <TeamName name="Rodrigo Monchi" designation="Trainer" />
                </div>
                </div>
            </div> */}
            </div>
        </div>
        </section>
    );
}


export default Team;