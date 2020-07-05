class AddRefsEstudiante < ActiveRecord::Migration[6.0]
  def change
    add_reference :estudiantes, :estudiante_progreso, foreign_key: true
    add_reference :estudiantes, :carrera, foreign_key: true
  end
end
