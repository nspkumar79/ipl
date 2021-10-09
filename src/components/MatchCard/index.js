import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const formattedData = {
    competingTeamLogo: eachMatch.competing_team_logo,
    competingTeam: eachMatch.competing_team,
    result: eachMatch.result,
    matchStatus: eachMatch.match_status,
  }
  const {competingTeamLogo, competingTeam, result, matchStatus} = formattedData

  return (
    <li className="recent-item-container">
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading">{competingTeam}</p>
      <p className="name">{result}</p>
      <p className="name">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
