require 'rails_helper'
require 'support/tag_sti_helper'

RSpec.describe Label, type: :model do
  it_should_behave_like "an STI class of tag"
end
