import React from 'react';
import Buttons from '../components/button'

const CardTitle = (props) => {
  return(
    <div class="w-full p-8 text-3xl text-gray-600 font-bold text-center">{props.title}</div>
  )
}

const CardBody = (props) => {
  return(
    <div class={`sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 flex flex-col focus:outline-none hover:bg-yellow-300 transition duration-300 ease-in-out ${props.styles}`}>
      <CardTitle title={props.title} />
      <div class="border-0 border-grey-light border-t border-solid text-sm">
          {
            props.perks.map((perk,i)=>(
              <div key={i} class="text-center border-0 border-grey-light border-b border-solid py-4">
                {perk}
              </div>
            ))
          }
      </div>
      <div class="text-center ps-8 mb-8 mt-auto">
      <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
        <span>
          {props.dPrice} {/* dPrice = dicounted price */}
        </span>
        <span class="text-grey-light italic line-through">
          {props.aPrice} {/* aPrice = actual price */}
        </span>
      </div>
        <Buttons title='Sign Up' bcolor='red-400' bHoverColor='red-600' tcolor='white'/>
      </div>
    </div>
  );
}

function Subscription(params) {
    return(
      <div class="w-full bg-red-900 pt-8">
        <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <CardBody title="Free" perks={["Gym Machines","Locker"]} styles="rounded-tr-none" dPrice="$0.00" />
          <CardBody title="Basic" perks={["Gym Machines","Locker","Trainer"]} aPrice="$4.99" dPrice="$2.99" styles="sm:-mt-4 shadow-lg z-30" />
          <CardBody title="Pro" perks={["Gym Machines","Locker","Trainer","Daily Supplyments"]} aPrice="$9.99" dPrice="$7.99" styles="rounded-tl-none"/> 
        </div>
      </div>
    )
}

export default Subscription