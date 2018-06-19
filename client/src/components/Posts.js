import React from 'react'
import { connect} from 'react-redux'
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

  // handleChange = (e, data) => {
  //   this.setState({ allPosts: data.value })
  // }

  allPosts = () => {
    this.setState({ myPosts: false })
  }

  myPosts = () => {
    this.setState({ myPosts: true })
  }

  // categoryOptions = () => {
  //   const { categories } = this.props
  //   return categories.map( (c,i) => { 
  //     return { key: i, text: c, value: c }
  //   })
  // }

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
          View Post
        </Link>
        <Button
            fluid
            basic
            onClick={() => this.props.dispatch(deletePost(post.id))}
            >Delete Me
        </Button>
      </Card.Content>
    </Card>
    )
  }
  
  render() {
    const { showForm } = this.state
    return (
      <Container>
      <Divider />
        <Header
          textAlign="center"
          as="h1"
          >
            Let's have a look at all your lovely posts
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
            <Button.Group>
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