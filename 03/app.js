import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Article extends React.Component {
  state = {
    comments: [],
    comment: ''
  }

  render () {
    const { title, body } = this.props
    const { comment = '' } = this.state
    return (
      <article>
        <h1>{ title }</h1>
        <p>{ body }</p>
        <section>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>
                <textarea
                  style={{ minWidth: '300px', minHeight: '120px' }}
                  name={'content'}
                  onChange={this.textareaChange}
                  value={comment}
                />
              </label>
            </div>
            <div><input
              type={'submit'}
              value={'dodaj komentarz'}
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

  textareaChange = e => {
    this.setState({
      comment: e.target.value
    }
    )
  }

  submitHandler = e => {
    e.preventDefault()
    const { comment } = this.state
    this.addComment(comment)
    this.setState({
      comment: ''
    })
  }

  addComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  renderComments = () => {
    const { comments } = this.state
    return (
      comments.map((comment, i) => {
        return <li key={i}>{comment}</li>
      })
    )
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
