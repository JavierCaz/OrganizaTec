class CreateCarreraMateriasTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :subjects, :carreras
  end
end
