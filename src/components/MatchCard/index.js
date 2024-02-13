import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatches
  console.log(recentMatches)

  return (
    <div className="match-card">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competingTeamLogo-match-card"
      />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p className="para">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
