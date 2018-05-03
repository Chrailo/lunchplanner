import React from 'react'
import FaCab from 'react-icons/lib/fa/cab'

const ParticipantList = () => (
  <div id="participants" className="main-column" >
    <ul style={{listStyle: 'none',  padding:0, margin:0}}>
      <li>Kalle</li>
      <li>Nisse <FaCab /></li>
      <li>Pellev</li>
      <li>Anna <FaCab /></li>
      <li>Felicia</li>
      <li>August</li>
      <li>Janne</li>
      <li>Tarzan</li>
      <li>Banarne</li>
    </ul>
  </div>
)
 
export default ParticipantList;