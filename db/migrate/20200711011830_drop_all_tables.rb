class DropAllTables < ActiveRecord::Migration[6.0]
  def change
    drop_join_table :subjects, :carreras
    drop_table :materias_cursadas
    drop_table :subjects
    drop_table :estudiante_progresos
    drop_table :estudiantes
    drop_table :carreras
  end
end
