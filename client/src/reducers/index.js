import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import comments from './comments';


const rootReducer = combineReducers({
  user,
  flash,
  posts,
  comments,
});

export default rootReducer;
