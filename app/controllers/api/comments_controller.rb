class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  

  def index
    render json: Comment.all
  end

  def show
    render json: @comment
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors.full_messages.join(',') }, status: 422
    end
  end

  def create
    comment = current_user.comments.create(comment_params)
    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @comment.destroy
  end

  private
    
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:body, :post_id)
    end

end
