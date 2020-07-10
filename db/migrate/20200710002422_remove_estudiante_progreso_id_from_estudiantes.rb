class RemoveEstudianteProgresoIdFromEstudiantes < ActiveRecord::Migration[6.0]
  def change
    remove_column :estudiantes, :estudiante_progreso_id
  end
end
