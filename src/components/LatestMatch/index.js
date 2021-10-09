import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {date, venue, result, umpires} = latestMatchDetails
  const formatteddetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
  }
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = formatteddetails

  return (
    <>
      <div className="latestMatch-card-container">
        <div className="match-info-container">
          <p className="heading">{competingTeam}</p>
          <p className="heading">{date}</p>
          <p className="name">{venue}</p>
          <p className="name">{result}</p>
        </div>
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="match-details-container">
          <p className="heading">First Innings</p>
          <p className="name">{firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="name">{secondInnings}</p>
          <p className="heading">Man Of The Match</p>
          <p className="name">{manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="name">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
