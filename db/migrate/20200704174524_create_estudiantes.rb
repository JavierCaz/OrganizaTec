class CreateEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :estudiantes do |t|
      t.string :noControl
      t.string :nombre
      t.string :correo
      t.string :pass

      t.timestamps
    end
  end
end
