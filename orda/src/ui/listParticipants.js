import '../css/listParticipants.css';

function ListParicipants () {

  return (
    <div className='contentParticipants'>
      <div className='headList'>
        <button className='addParticipant'> Добавить участника </button>
      </div>
      <div>
        <table className='tableParticipants'>
          <tbody>
            <tr>
              <th>Ник</th>
              <th>1 Советник</th>
              <th>2 Советник</th>
              <th>3 Советник</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListParicipants;