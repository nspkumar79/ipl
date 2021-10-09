import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachCard} = props
  const {id, name, teamImageUrl} = eachCard

  return (
    <li className="list-card-item">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={`${name}`} className="teamImage" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
