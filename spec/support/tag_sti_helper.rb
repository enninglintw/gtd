shared_examples "an STI class of tag" do
  subject { described_class.new(
    title: Faker::Lorem.sentence,
    type: described_class.name,
    color: (0..5).to_a.sample,
  ) }
  it { should be_valid }

  it { should have_many(:todo_tags) }
  it { should have_many(:todos).through(:todo_tags) }
  it { should have_many(:project_tags) }
  it { should have_many(:projects).through(:project_tags) }

  describe '#title' do
    it { should validate_presence_of(:title) }
  end

  describe '#type' do
    it { should validate_presence_of(:type) }
    it { should be_a_kind_of described_class}
  end

  describe '#color' do
    it { should define_enum_for(:color).with([
      :red, :orange, :yellow, :green, :blue, :purple
    ]) }
  end
end
