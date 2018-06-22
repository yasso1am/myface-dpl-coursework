class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

 # SQL WAY
  def self.with_author
    Comment.find_by_sql("
      SELECT c.id, c.body, c.user_id, c.post_id, u.name as user_name
      FROM comments AS c
      LEFT JOIN users u ON c.user_id = u.id 
      ORDER BY c.created_at desc
    ")
  end

  # # ACTIVE RECORD
  # def self.with_author
  #   select("comments.id, comments.body, comments.user_id, comments.post_id, users.name as user_name")
  #   .joins("LEFT JOIN users ON comments.user_id = users.id")
  #   .order("comments.created_at DESC")
  # end

end
