# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

3.times do
  Project.create!(
    title: Faker::Lorem.sentence,
    notes: Faker::Lorem.paragraph,
    state: (0..3).to_a.sample,
    focus: Faker::Boolean.boolean,
    due: Faker::Date.forward,
    actions_behaviour: (0..1).to_a.sample
  )
end

6.times do
  Todo.create!(
    title: Faker::Lorem.sentence,
    notes: Faker::Lorem.paragraph,
    state: (0..5).to_a.sample,
    focus: Faker::Boolean.boolean,
    time: [5, 10, 15, 30, 45, 60, 120, 180, 240, 360, 480, 999].sample,
    energy: [:low, :medium, :high].sample,
    due: Faker::Date.forward,
    project_id: Project.all.ids.sample
  )
end

5.times do
  Tag.create!(
    title: Faker::Lorem.unique.word,
    type: %w(Area Contact Label).sample,
    color: (0..5).to_a.sample
  )
end

10.times do
  TodoTag.create!(
    todo_id: Todo.all.ids.sample,
    tag_id: Tag.all.ids.sample
  )
end

10.times do
  ProjectTag.create!(
    project_id: Project.all.ids.sample,
    tag_id: Tag.all.ids.sample
  )
end
