class CreateMateriasCursadas < ActiveRecord::Migration[6.0]
  def change
    create_table :materias_cursadas do |t|
      t.integer :semestre

      t.timestamps
    end
  end
end
