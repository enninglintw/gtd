require 'rails_helper'

RSpec.describe Project, type: :model do
  subject { described_class.new(
    title: Faker::Lorem.sentence,
    state: (0..3).to_a.sample,
    process: (0..1).to_a.sample,
  ) }
  it { should be_valid }

  it { should have_many(:todos) }
  it { should have_many(:project_tags) }
  it { should have_many(:tags).through(:project_tags) }

  describe '#title' do
    it { should validate_presence_of(:title) }
  end

  describe '#state' do
    it { should validate_presence_of(:state) }
    it { should define_enum_for(:state).with([
      :active, :later, :scheduled, :someday
    ]) }
  end

  describe '#process' do
    it { should validate_presence_of(:process) }
    it { should define_enum_for(:process).with([:parallel, :sequential]) }
  end
end
