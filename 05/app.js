import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Weather extends React.Component {
  state = {
    data: null
  }

  render () {
    const { data } = this.state
    console.log(data)
    if (data) {
      return <h1>{this.setWeatherInfo}</h1>
    }
    return null
  }

  componentDidMount () {
    const { lat, lng } = this.props
    const key = 'e3a83e239a6c43cab8f3dd2ba8584cde'
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`
    const data = fetch(url)
    data
      .then((resp) => resp.json())
      .then((data) => this.setState({
        data
      }))
  }
}

Weather.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
}

ReactDOM.render(
  <Weather
    lat={52.232222}
    lng={21.008333}
  />,
  document.querySelector('#root')
)
