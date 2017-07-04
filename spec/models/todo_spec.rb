require 'rails_helper'

RSpec.describe Todo, type: :model do
  subject { described_class.new(
    title: Faker::Lorem.sentence,
    state: (0..5).to_a.sample
  ) }
  it { should be_valid }

  it { should belong_to(:project) }
  it { should have_many(:todo_tags) }
  it { should have_many(:tags).through(:todo_tags) }

  describe '#title' do
    it { should validate_presence_of(:title) }
  end

  describe '#state' do
    it { should validate_presence_of(:state) }
    it { should define_enum_for(:state).with([
      :inbox, :next, :later, :waiting, :scheduled, :someday
    ]) }
  end

  describe '#energy' do
    it { should define_enum_for(:energy).with([:low, :medium, :high]) }
  end

  describe '#time' do
    it { should define_enum_for(:time).with({
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
    }) }
  end
end
