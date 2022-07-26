import React, { Component } from 'react';

function Buttons(props) {
    return(
        <button onClick={props.onClick} class={`transition duration-300 ease-in-out inline-flex text-${props.tcolor} bg-${props.bcolor} border-0 py-2 px-6 focus:outline-none hover:bg-${props.bHoverColor} rounded text-lg`}>
            {props.title}
        </button>
    );
}

export default Buttons;