import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    counter: 0
  }

  render() {
    console.log('render')

    return <h1>{this.state.counter}</h1>
  }

  componentDidMount() {
    console.log('.componentDidMount')
    const { time } = this.props
    this.id = setInterval(
      () => {
        const { counter } = this.state
        this.setState({ counter: counter + 1 })
      }
      , time
    )
  }

  componentWillUnmount() {
    console.log('.componentWillUnmount')
    clearInterval(this.id)
  }
}

App.proptypes = {
  time: PropTypes.number
}

ReactDOM.render(<App time={5000} />, document.querySelector('#root'))
