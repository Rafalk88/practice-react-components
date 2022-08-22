import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    searchQuery: '',
    users: ['Jan Kowalski', 'Michał Nowak']
  }

  renderUserUl (usersTable) {
    return usersTable.map((name, i) => {
      return (
        <li
          onClick={this.clickHandler}
          key={i}
        >
          { name }
        </li>
      )
    })
  }

  renderUsersList () {
    const { users, searchQuery } = this.state
    if (!searchQuery) {
      return this.renderUserUl(users)
    } else {
      const filteredUsers = users.filter(user => user.toLowerCase().includes(searchQuery.toLowerCase()))
      return this.renderUserUl(filteredUsers)
    }
  }

  clickHandler = e => {
    const { innerText: userName } = e.target
    this.removeUser(userName)
  }

  inputChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    const { firstName, lastName, searchQuery } = this.state
    return (
      <section onSubmit={this.submitHandler}>
        <form>
          <input
            name={'firstName'}
            value={firstName}
            onChange={this.inputChange}
            placeholder={'first name'}
          />
          <input
            name={'lastName'}
            value={lastName}
            onChange={this.inputChange}
            placeholder={'last name'}
          />
          <input type={'submit'}/>
        </form>
        <input
          name={'searchQuery'}
          value={searchQuery}
          onChange={this.inputChange}
          placeholder={'filter phrase'}
        />
        <ul>{ this.renderUsersList() }</ul>
      </section>
    )
  }

  submitHandler = e => {
    e.preventDefault()

    const { firstName, lastName } = this.state
    if (firstName && lastName) {
      this.addUser(`${firstName} ${lastName}`)
      this.setState({
        firstName: '',
        lastName: ''
      })
    } else {
      // tutaj komunikat dla użytkownika
    }
  }

  addUser (name) {
    this.setState({
      users: [...this.state.users, name]
    })
  }

  removeUser (name) {
    const currUsers = this.state.users.filter(
      user => user !== name
    )

    this.setState({
      users: currUsers
    })
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
