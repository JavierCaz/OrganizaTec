class CreateJoinTableCareerSubject < ActiveRecord::Migration[6.0]
  def change
    create_join_table :careers, :subjects do |t|
      t.index [:career_id, :subject_id]
      t.index [:subject_id, :career_id]
    end
  end
end
