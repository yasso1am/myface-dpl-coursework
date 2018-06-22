class User < ActiveRecord::Base
  has_many :posts
  has_many :comments
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :friends, Array

  def self.befriended(ids)
    binding.pry
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

end
