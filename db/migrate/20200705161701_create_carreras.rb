class CreateCarreras < ActiveRecord::Migration[6.0]
  def change
    create_table :carreras do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
