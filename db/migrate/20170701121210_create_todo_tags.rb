class CreateTodoTags < ActiveRecord::Migration
  def change
    create_table :todo_tags do |t|
      t.integer :todo_id
      t.integer :tag_id

      t.timestamps null: false
    end
    add_index :todo_tags, :todo_id
    add_index :todo_tags, :tag_id
  end
end
