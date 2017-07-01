require 'rails_helper'

RSpec.describe Project, type: :model do
  subject { described_class.new(
    title: "Anything",
    state: (0..3).to_a.sample,
    actions_behaviour: (0..1).to_a.sample,
  ) }
  it { should be_valid }

  describe '#title' do
    it { should validate_presence_of(:title) }
  end

  describe '#state' do
    it { should validate_presence_of(:state) }
    it { should define_enum_for(:state).with([
      :active, :later, :scheduled, :someday
    ]) }
  end

  describe '#actions_behaviour' do
    it { should validate_presence_of(:actions_behaviour) }
    it { should define_enum_for(:actions_behaviour).with([:parallel, :sequential]) }
  end
end
