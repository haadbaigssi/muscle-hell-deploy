import React, { Component } from 'react';

const Heading = (props) => {
    return(
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-300">{props.title}</h1>
    )
}

export default Heading;