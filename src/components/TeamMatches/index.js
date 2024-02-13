import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], recentMatches: [], teamMatches: ''}

  componentDidMount() {
    this.teamMatchDetails()
  }

  teamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data.team_banner_url)

    const updatedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    this.setState({matchDetails: updatedLatestMatchDetails})

    const updatedRecentMatches = data.recent_matches.map(i => ({
      competingTeam: i.competing_team,
      competingTeamLogo: i.competing_team_logo,
      date: i.date,
      first_innings: i.first_innings,
      id: i.id,
      manOfTheMatch: i.man_of_the_match,
      matchStatus: i.match_status,
      result: i.result,
      secondInnings: i.second_innings,
      umpires: i.umpires,
      venue: i.venue,
    }))
    this.setState({
      recentMatches: updatedRecentMatches,
      teamMatches: data.team_banner_url,
    })
  }

  render() {
    const {matchDetails, recentMatches, teamMatches} = this.state

    return (
      <div className="match-details">
        <img src={teamMatches} alt="" className="team-logo" />
        <div className="match-details-main-container">
          <LatestMatch matchDetails={matchDetails} />
        </div>
        <div className="recent-match-main-container">
          <ul>
            {recentMatches.map(i => (
              <MatchCard recentMatches={i} key={i.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
