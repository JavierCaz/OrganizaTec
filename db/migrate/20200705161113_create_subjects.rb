class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :nombre
      t.integer :creditos

      t.timestamps
    end
  end
end
