class Tag < ActiveRecord::Base
  validates_presence_of :title, :type

  enum color: [:red, :orange, :yellow, :green, :blue, :purple]
end
