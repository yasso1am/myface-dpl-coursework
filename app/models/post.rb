class Post < ApplicationRecord
  belongs_to :user

  def self.post_with_author
    select("posts.id, title, body, user_id, name AS user_name")
    .joins("INNER JOIN users ON posts.user_id = users.id")
    .order("posts.created_at DESC")
  end
  
end

#Post.find_by_sql("select p.id as id, p.title as title, p.body as body, u.name as user_name from posts p join users u on p.user_id = u.id order by p.created_at desc")