class AddPlanesEstudioToEstudiantes < ActiveRecord::Migration[6.0]
  def change
    add_column :estudiantes, :semestres, :integer
    add_column :estudiantes, :veranos, :integer
  end
end
