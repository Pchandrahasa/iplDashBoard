import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="match-details-container">
      <div className="left-container">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competingTeamLogo"
      />
      <div className="right-container">
        <h1>firstInnings</h1>
        <p>{firstInnings}</p>
        <h1>secondInnings</h1>
        <p>{secondInnings}</p>
        <h1>manOfTheMatch</h1>
        <p>{manOfTheMatch}</p>
        <h1>umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
