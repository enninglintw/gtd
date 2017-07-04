require 'rails_helper'

RSpec.describe TodoTag, type: :model do
  it { should belong_to(:todo) }
  it { should belong_to(:tag) }
end
