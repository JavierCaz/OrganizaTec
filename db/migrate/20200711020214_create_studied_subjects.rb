class CreateStudiedSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :studied_subjects do |t|
      t.integer :semester

      t.timestamps
    end
    add_reference :studied_subjects, :student_progress, foreign_key: true
    add_reference :studied_subjects, :subject, foreign_key: true
  end
end
