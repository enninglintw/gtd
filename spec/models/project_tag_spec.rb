require 'rails_helper'

RSpec.describe ProjectTag, type: :model do
  it { should belong_to(:project) }
  it { should belong_to(:tag) }
end
