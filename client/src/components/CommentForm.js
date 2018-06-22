import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateComment, addComment } from '../reducers/comments'

class CommentForm extends React.Component {

  state = {
    body: '',
    post_id: this.props.postId,
  }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    debugger
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const comment = this.state
    const { dispatch } = this.props
    const ternaryAnswer = this.props.id ? updateComment : addComment
    dispatch(ternaryAnswer(comment))
    this.setState({body: ''})
  }

  render() {
    const { body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="body"
          value={body}
          onChange={this.handleChange}
          label="Comment on this post"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(CommentForm)