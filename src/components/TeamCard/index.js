import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplList} = props
  const {id, name, teamImageUrl} = iplList

  return (
    <Link to={`/ipl/${id}`}>
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="team-logos" />
        <h1>{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
