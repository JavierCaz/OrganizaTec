class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :control_number
      t.string :name
      t.string :email
      t.string :pass

      t.timestamps
    end
    add_reference :students, :career, foreign_key: true
  end
end
