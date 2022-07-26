import React, { Component } from 'react';
import dumbbell from '../assets/dumbbell.svg'

function Footer(params) {
    return(
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-56 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img style={{backgroundColor:'white' }} width='30px' src={dumbbell} alt="Girl in a jacket"/>
                    <span class="ml-5 text-xl">Muscle Hell</span>
                </a>
                <p class="mt-3 text-sm text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;