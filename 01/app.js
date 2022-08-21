import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    counter: 0
  }

  render () {
    console.log('render')

    return <h1>{this.state.counter}</h1>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
