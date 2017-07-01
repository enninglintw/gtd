class Tag < ActiveRecord::Base
  has_many :todo_tags
  has_many :todos, through: :todo_tags

  validates_presence_of :title, :type

  enum color: [:red, :orange, :yellow, :green, :blue, :purple]
end
