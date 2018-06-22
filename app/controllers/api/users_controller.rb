class Api::UsersController < ApplicationController
  
  def index
    render json: User.liked(current_user.friends)
  end

  def show
  end

  def make_friend
    current_user.friends << params[:friend]
    current_user.save
    render json: current_user
  end

  # put /api/users/id
  def update_friends
    current_user.friends << params[:id].to_i
    current_user.save
  end
    

end
