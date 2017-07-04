class CreateProjectTags < ActiveRecord::Migration
  def change
    create_table :project_tags do |t|
      t.integer :project_id
      t.integer :tag_id

      t.timestamps null: false
    end
    add_index :project_tags, :project_id
    add_index :project_tags, :tag_id
  end
end
