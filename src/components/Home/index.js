import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplList: []}

  componentDidMount() {
    this.iplListFetchDetails()
  }

  iplListFetchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(i => ({
      id: i.id,
      name: i.name,
      teamImageUrl: i.team_image_url,
    }))
    this.setState({iplList: updatedData})
  }

  render() {
    const {iplList} = this.state
    console.log(iplList)
    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1>IPL DASHBOARD</h1>
        </div>
        <ul className="ul-list">
          {iplList.map(i => (
            <TeamCard iplList={i} key={i.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
