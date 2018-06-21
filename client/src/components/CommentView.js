import React from 'react'
import { connect } from 'react-redux'
import { getComments, deleteComment } from '../reducers/comments'
import { 
  Button,
  Header,
  Container,
  Divider,
} from 'semantic-ui-react'

class CommentView extends React.Component {

  componentDidMount() {
    this.props.dispatch(getComments())
  }

  render() {
    const { comments } = this.props
    let scopedComments = comments.filter (c => c.post_id === parseInt(this.props.postId) )
    const listComments = scopedComments.map( comment =>
      <Container key={comment.id}>
      <Header>
        {comment.user_name} says:
      </Header>
        <span>
          {comment.body}
        </span>
        <Divider />
      </Container>
    )
    return(
      listComments
    )
  }
}

const mapStateToProps = (state) => {
  const { comments, user } = state
  return {
    comments,
    user,
  }
}

  export default connect(mapStateToProps)(CommentView)