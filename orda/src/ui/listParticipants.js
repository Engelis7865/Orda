import '../css/listParticipants.css';
import Participant from "./participant";
import React, { useState } from 'react';

function ListParicipants () {
  const [isOpen, setIsOpen] = useState(false);

  function showParticipant() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <div className='contentParticipants'>
      <div className='headList'>
        <button className='button'> Добавить участника </button>
      </div>
      <div className='content'>
        <div
          className={ isOpen ? 'buttonHide' : 'buttonShow'}
          onClick={showParticipant}
          isOpen = {isOpen}
        />
      </div>
      <div className='content'>Ник</div>
      <div className='content'>1 советник</div>
      <div className='content'>2 советник</div>
      <div className='content'>3 советник</div>
      <Participant className='content'/>
          {/*<table className='tableParticipants'>*/}
          {/*  <tbody>*/}
          {/*    <tr>*/}
          {/*      <th>Ник</th>*/}
          {/*      <th>1 Советник</th>*/}
          {/*      <th>2 Советник</th>*/}
          {/*      <th>3 Советник</th>*/}
          {/*      <th></th>*/}
          {/*    </tr>*/}
          {/*    <Participant/>*/}
          {/*  </tbody>*/}
          {/*</table>*/}
    </div>
  )
}

export default ListParicipants;