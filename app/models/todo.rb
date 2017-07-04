class Todo < ActiveRecord::Base
  belongs_to :project
  has_many :todo_tags
  has_many :tags, through: :todo_tags

  validates_presence_of :title, :state

  enum state: [:inbox, :next, :later, :waiting, :scheduled, :someday]
  enum energy: [:low, :medium, :high]
  enum time: {
    in_5_mins:  5,
    in_10_mins: 10,
    in_15_mins: 15,
    in_30_mins: 30,
    in_45_mins: 45,
    in_1_hr:    60,
    in_2_hrs:   120,
    in_3_hrs:   180,
    in_4_hrs:   240,
    in_6_hrs:   360,
    in_8_hrs:   480,
    whoa_nelly: 999
  }
end
