import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateComment, addComment } from '../reducers/comments'

class CommentForm extends React.Component {

  initialState = {
    body: '',
    // user_id: this.props.user.id,
    post_id: this.props.postId,
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const comment = this.state
    const { dispatch } = this.props
    const myFunc = this.props.id ? updateComment : addComment
    dispatch(myFunc(comment))
    this.setState({...this.initialState})
  }

  render() {
    const { body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Comment on this post"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   const { id } = props.match.params
//   const { user } = state
//   const post = state.posts.find( p => p.id === parseInt(id, 10) )
//   return { 
//     post, 
//     user, 
//   }
// }

export default connect()(CommentForm)