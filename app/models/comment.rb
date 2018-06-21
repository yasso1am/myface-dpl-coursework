class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  def self.with_author
    Comment.find_by_sql("
      SELECT c.id, c.body, c.user_id, c.post_id, u.name as user_name
      FROM comments AS c
      LEFT JOIN users u ON c.user_id = u.id 
      ORDER BY c.created_at desc
    ")
  end

end
