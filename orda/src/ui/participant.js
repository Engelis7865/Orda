import React, { useState } from 'react';

function Participant (props) {


  return(
    <>
      <tr>
      {props.isOpen ?
      <>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button className='button'>изменить</button>
          <button className='button'>удалить</button>
        </td>
       </>:
        null}
        </tr>
    </>
  )
}

export default Participant;