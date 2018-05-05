import React from 'react'
import FaCab from 'react-icons/lib/fa/cab'
import {connect} from 'react-redux'

export const ParticipantList = (props) => (
  <div id="participants" className="main-column" >
    {props.participants}
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
 
const mapStateToProps = (state) => {
  return {
    participants : state.participants
  }
}

export default connect(mapStateToProps)(ParticipantList);