class RenameActionsBehaviourAsProcess < ActiveRecord::Migration
  def change
    rename_column :projects, :actions_behaviour, :process
  end
end
