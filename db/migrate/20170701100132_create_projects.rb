class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :notes
      t.integer :state
      t.boolean :focus
      t.date :due
      t.integer :actions_behaviour

      t.timestamps null: false
    end
  end
end
