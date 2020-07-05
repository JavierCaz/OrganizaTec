class CreateEstudianteProgresos < ActiveRecord::Migration[6.0]
  def change
    create_table :estudiante_progresos do |t|
      t.integer :semestre
      t.integer :actExtra
      t.integer :ingles
      t.integer :residencias
      t.integer :servSocial

      t.timestamps
    end
  end
end
