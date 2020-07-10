class AddRefToEstudianteProgreso < ActiveRecord::Migration[6.0]
  def change
    add_reference :estudiante_progresos, :estudiante, foreign_key: true
  end
end
