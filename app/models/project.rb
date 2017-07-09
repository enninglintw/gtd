class Project < ActiveRecord::Base
  has_many :todos
  has_many :project_tags
  has_many :tags, through: :project_tags

  validates_presence_of :title, :state, :process

  enum state: [:active, :later, :scheduled, :someday]
  enum process: [:parallel, :sequential]
end
