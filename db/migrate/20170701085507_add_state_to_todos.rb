class AddStateToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :state, :integer, after: :notes
  end
end
