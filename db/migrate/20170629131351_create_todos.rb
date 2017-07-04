class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.text :notes
      t.boolean :focus
      t.integer :time
      t.integer :energy
      t.date :due

      t.timestamps null: false
    end
  end
end
