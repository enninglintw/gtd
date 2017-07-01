class Project < ActiveRecord::Base
  has_many :todos
  has_many :project_tags
  has_many :tags, through: :project_tags

  validates_presence_of :title, :state, :actions_behaviour

  enum state: [:active, :later, :scheduled, :someday]
  enum actions_behaviour: [:parallel, :sequential]
end
