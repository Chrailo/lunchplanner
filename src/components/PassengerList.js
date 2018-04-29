import React from 'react';

const PassengerList = (props) => (
  <div>
    <ul style={{listStyle: 'none',  padding:0, margin:0}}>
      {props.passengers.map((passenger, i) => passenger ? <li key={passenger} >{passenger} </li> :<div key={i}><a  href="">Join</a></div>) }
    </ul>
  </div>
)
 
export default PassengerList;