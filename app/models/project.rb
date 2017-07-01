class Project < ActiveRecord::Base
  has_many :todos

  validates_presence_of :title, :state, :actions_behaviour

  enum state: [:active, :later, :scheduled, :someday]
  enum actions_behaviour: [:parallel, :sequential]
end
