class Post < ApplicationRecord
  belongs_to :user

  def self.post_with_author
    Post.find_by_sql("select p.id as id, p.title as title, p.body as body, u.name as user_name from posts p join users u on p.user_id = u.id order by p.created_at desc")
  end

end
