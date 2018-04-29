import React from 'react';
import PassengerList from './PassengerList';

const Driver = (props) => (
  <div>
    {props.driver} car: {props.passengers.filter(val => val!='').length} / {props.seats} seats
    {props.hasPassengers ? 
        <PassengerList passengers={props.passengers} />  : (
        <div>
          Hej
          {[...Array(props.seats)].map((x, i) => <div key={i}><a href="">Join</a></div>)} 
        </div>)
      }
  </div>
)
 
export default Driver;