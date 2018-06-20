import React from 'react'
import { connect } from 'react-redux'
import {
  Divider,
  Header,
  Image,
  Container,
  Table,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'

class PostView extends React.Component {
  state = { showForm: false }

  componentDidMount(){
    debugger
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  editForm = (post) => {
    const { showForm } = this.state
    if (post.user_id === this.props.user.id){
       return ( <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
      )
    }
  }
  

  render() {
    const { post = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/posts">Go back to all Posts</Link>
        { this.editForm(post) }
        { showForm ?
            <PostForm closeForm={this.toggleForm} {...post} />
            :
            <div>
              <Header as="h3" textAlign="center">{post.title}</Header>
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                      {post.title}
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{post.user_name}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Body</Table.Cell>
                    <Table.Cell>{post.body}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  const { user } = state
  const post = state.posts.find( p => p.id === parseInt(id, 10) )
  return { post, user }
}

export default connect(mapStateToProps)(PostView)