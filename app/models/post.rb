class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  # ACTIVE RECORD WAY
  # def self.post_with_author
  #   select("posts.id, title, body, user_id, name AS user_name")
  #   .joins("LEFT JOIN users ON posts.user_id = users.id")
  #   .order("posts.created_at DESC")
  # end

  # SQL WAY
  def self.post_with_author
    Post.find_by_sql("
      SELECT p.id, p.title, p.body, p.user_id, u.name AS user_name, u.image as user_image
      FROM posts AS p 
      LEFT JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at desc
      ")
    end
end

#Post.find_by_sql("select p.id as id, p.title as title, p.body as body, u.name as user_name from posts p join users u on p.user_id = u.id order by p.created_at desc")