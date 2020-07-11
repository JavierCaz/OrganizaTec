class CreateStudentProgresses < ActiveRecord::Migration[6.0]
  def change
    create_table :student_progresses do |t|
      t.integer :semesters
      t.integer :summers
      t.integer :kardex_hours
      t.integer :extra_activities
      t.integer :english_level
      t.integer :residences
      t.integer :social_service_hours

      t.timestamps
    end
    add_reference :student_progresses, :student, foreign_key: true
  end
end
