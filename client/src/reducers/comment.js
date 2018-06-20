import axios from 'axios'
const COMMENTS = 'COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export const getComments = () => {
  return (dispatch) => {
    axios.get('/api/comments')
    .then ( res => {
      dispatch ({ type: COMMENTS, posts: res.data, headers: res.headers })
    })
  }
}

export const addComment = (comment) => {
  return (dispatch) => {
    axios.post('/api/comments', { comment })
    .then( res => {
      dispatch({ type: ADD_COMMENT, post: res.data, headers: res.headers })
    })
  }
}

export const updateComment = (comment) => {
  return (dispatch) => {
    axios.put(`/api/${comment.id}`, {comment})
    .then (res => {
      dispatch({ type: UPDATE_COMMENT, post: res.data, headers: res.headers })
    })
  }
}

export const deleteComment = (id) => {
  return (dispatch) => {
    axios.delete(`/api/comments/${id}`)
    .then( res => dispatch ({ type: DELETE_COMMENT, id, headers: res.headers }) )
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case COMMENTS:
        return action.comments
    case ADD_COMMENT:
        return [action.comment, ...state]
    case UPDATE_COMMENT:
      return state.map (c => {
        if (c.id === action.comment.id)
          return action.comment
        return c
      })
    case DELETE_COMMENT:
      return state.filter( c => c.id !== action.id )
    default:
      return state
  }
}