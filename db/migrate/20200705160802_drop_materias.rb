class DropMaterias < ActiveRecord::Migration[6.0]
  def change
    drop_table :materia
  end
end
