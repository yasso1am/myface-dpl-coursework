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
    return comments.map( comment =>
      <Container>
        <Divider key={comment.id}/>
          {comment.body}
      </Container>
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

  export default connect (mapStateToProps)(CommentView)