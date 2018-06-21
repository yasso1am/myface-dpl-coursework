import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Posts from './Posts'
import PostView from './PostView'
import { getPosts } from '../reducers/posts'

class FetchPosts extends React.Component { 

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
      return(
        <div>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={PostView} />
        </div>
      )   
  }
}

export default connect()(FetchPosts)