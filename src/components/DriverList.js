import React from 'react';
import Driver from './Driver';

const DriverList = () => {
  const driver1 =['Kalle', 'Pellev', 'Felicia', '']
  const driver2 = ['', '','' ,'']
  return (
    <div>
    Drivers:
    <Driver driver={'Nisse'} hasPassengers={true} passengers={driver1} seats={4} />
    <Driver driver={'Anna'} seats={4} passengers={driver2} hasPassengers={true} />
  </div>
  )
}



 
export default DriverList;