class AddMateriasCursadasRef < ActiveRecord::Migration[6.0]
  def change
    add_reference :materias_cursadas, :estudiante_progreso, foreign_key: true
    add_reference :materias_cursadas, :subject, foreign_key: true
    
  end
end
