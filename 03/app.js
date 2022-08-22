import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Article extends React.Component {
  state = {
    comments: []
  }

  render () {
    const { title, body } = this.props
    return (
      <article>
        <h1>{ title }</h1>
        <p>{ body }</p>
        <section>
          <form>
            <div>
              <label>
                <textarea
                  style={{ minWidth: '300px', minHeight: '120px' }}
                  name={'content'}
                  onChange={this.changeHandler}
                />
              </label>
            </div>
            <div><input
              type={'submit'}
              value={'dodaj komentarz'}
              onSubmit={this.submitHandler}
                 />
            </div>
          </form>
          <ul>
            {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
            {this.renderComments()}
          </ul>
        </section>
      </article>
    )
  }

  renderComments = () => {
    const { comments } = this.state
    return (
      comments.map((comment, i) => {
        return <li key={i}>{comment}</li>
      })
    )
  }

  changeHandler = () => {
    console.log('changeHandler')
  }

  submitHandler = e => {
    e.preventDefault()
    console.log('submitHandler')
  }
}

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string)
}

ReactDOM.render(
  <Article
    title={'Programowanie jest super!'}
    body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam...'}
  />,
  document.querySelector('#root')
)
