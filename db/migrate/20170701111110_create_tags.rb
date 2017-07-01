class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :title
      t.string :type
      t.integer :color

      t.timestamps null: false
    end
  end
end
