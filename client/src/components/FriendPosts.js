import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { getFriendsPosts } from '../reducers/users'



class FriendPosts extends React.Component {

componentDidMount() {
  const { dispatch } = this.props
  axios.get('/api/users')
    .then( ({ data }) => {
      this.setState({friendsPosts: data})
    })
  }

    render() { 
     const { user } = this.props
    return (
      <div>

      </div>

      )
    }
 
  }

  const mapStateToProps = (state) => {
      const { user } = state
      return {
        user
      }
  }

  export default connect(mapStateToProps)(FriendPosts)