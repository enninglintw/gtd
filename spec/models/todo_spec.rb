require 'rails_helper'

RSpec.describe Todo, type: :model do
  subject { described_class.new(title: "Anything") }
  it { should be_valid }

  describe '#title' do
    it { should validate_presence_of(:title) }
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
