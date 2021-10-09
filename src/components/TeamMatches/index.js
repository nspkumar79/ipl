import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, MatchData: {}, id: ''}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({MatchData: updatedData, isLoading: false, id: {id}})
  }

  renderTeamMatchDetails = () => {
    const {MatchData, id} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = MatchData
    console.log(id.id)

    return (
      <div className={`teamMatch-body-container ${id.id}`}>
        <div className="responsive-container">
          <img
            className="teamBannerImage"
            src={teamBannerUrl}
            alt="team banner"
          />
          <div className="latestMatch-container">
            <p className="text">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
          </div>
          <ul className="recentMatch-container">
            {recentMatches.map(eachMatch => (
              <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="teamMatch-container">
            <div testid="loader">
              <Loader type="Oval" color="#000000" height={50} width={50} />
            </div>
          </div>
        ) : (
          this.renderTeamMatchDetails()
        )}
      </>
    )
  }
}

export default TeamMatches
