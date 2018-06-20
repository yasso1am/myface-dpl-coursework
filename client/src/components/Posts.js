import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import { getPosts, deletePost } from '../reducers/posts'
import { 
  Button,
  Card,
  Header,
  Container,
  Divider,
  // Dropdown,
} from 'semantic-ui-react'

class Posts extends React.Component {
  state = { myPosts: false, showForm: false }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  allPosts = () => {
    this.setState({ myPosts: false })
  }

  myPosts = () => {
    this.setState({ myPosts: true })
  }

  deletePost = (post) => {
    if (post.user_id === this.props.user.id)
      return( 
        <Button
          fluid
          basic
          onClick={() => this.props.dispatch(deletePost(post.id))}
          >Delete Me
        </Button>
        )}


  posts = () => {
    const { posts, user } = this.props
    const { myPosts } = this.state
    let visible = posts
    if ( myPosts)
      visible = posts.filter (p => p.user_id === user.id )
    return visible.map( post =>
      <Card key={post.id}>
      <Card.Content>
        <Card.Header 
          style={{
            textDecoration: 'underline',
            textAlign: 'center',
            }}
        >
          {post.title}
        </Card.Header>
      </Card.Content>
      <Card.Content 
        extra
        style={{textAlign: 'center'}}
        >
        <Link to={`/posts/${post.id}`}>
        Author: {post.user_name}
        <br />
          View Post
        </Link>
        { this.deletePost(post) }
      </Card.Content>
    </Card>
    )
  }
  
  render() {
    const { showForm, myPosts } = this.state
    return (
      <Container>
      <Divider />
        <Header
          textAlign="center"
          as="h1"
          >
            The Loveliest of Posts
        </Header>
      <Button 
        fluid
        onClick={this.toggleForm}>
        { showForm ? 'Hide Form' : 'Add a new Post' }
      </Button>
        { showForm ?
          <PostForm closeForm={this.toggleForm} />
            :
            <div>
            <br />
            <Button.Group
              fluid>
              <Button 
                onClick={this.allPosts}
                >
                  All Posts
              </Button>
            <Button.Or />
              <Button 
                positive
                onClick={this.myPosts}
                >
                  My Posts
              </Button>
            </Button.Group>
           <h3 style={{textAlign: 'center'}}> { myPosts ? 'Here are only your posts' : "Everyone's posts!"} </h3>
      <Divider />
      <Card.Group itemsPerRow={4}>
        { this.posts() }
      </Card.Group>
      </div>
      }
     </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts, user } = state
  return {
    posts,
    user,
  }
}

export default connect(mapStateToProps)(Posts)