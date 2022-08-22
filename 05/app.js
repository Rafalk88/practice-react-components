import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Weather extends React.Component {
  state = {
    data: null
  }

  render () {
    if (this.state.data) {
      const [info] = this.state.data
      return (
        <div className={info.city_name}>
          <p>Miasto: {info.city_name}</p>
          <p>lat: {info.lat}</p>
          <p>lng: {info.lon}</p>
          <p>Temperatura: {info.temp}</p>
        </div>
      )
    }
    return null
  }

  componentDidMount () {
    const { lat, lng } = this.props
    const key = 'abc' //  process.env.REACT_APP_API_KEY
    const lang = 'pl'
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&lang=${lang}`
    const data = fetch(`${url}&lat=${lat}&lon=${lng}`)
    data
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
        if (resp.status === 429) {
          return Promise.reject(resp.status)
        }
        return Promise.reject(resp.status)
      })
      .then((object) => this.setState({
        data: object.data
      }))
  }
}

Weather.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
}

ReactDOM.render(
  <>
    <Weather
      lat={52.232222}
      lng={21.008333}
    />

    <Weather
      lat={50.061389}
      lng={19.938333}
    />

    <Weather
      lat={51.11}
      lng={17.022222}
    />
  </>,
  document.querySelector('#root')
)
