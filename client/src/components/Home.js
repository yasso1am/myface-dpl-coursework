import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Header,
  Container,
  Divider,
} from 'semantic-ui-react'

class Home extends Component {

  render() {
    return(
  <Container>
  <Divider />
  <Header
    textAlign="center"
    as="h1"
    >
      Welcome {this.props.user.name } to a <Link to ="/posts">Myspace</Link> webpage
  </Header>
  <Divider />
  </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return {
    user,
  }
}
export default connect(mapStateToProps)(Home)