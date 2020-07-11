# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_11_020551) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "careers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "careers_subjects", id: false, force: :cascade do |t|
    t.bigint "career_id", null: false
    t.bigint "subject_id", null: false
    t.index ["career_id", "subject_id"], name: "index_careers_subjects_on_career_id_and_subject_id"
    t.index ["subject_id", "career_id"], name: "index_careers_subjects_on_subject_id_and_career_id"
  end

  create_table "student_progresses", force: :cascade do |t|
    t.integer "semesters"
    t.integer "summers"
    t.integer "kardex_hours"
    t.integer "extra_activities"
    t.integer "english_level"
    t.integer "residences"
    t.integer "social_service_hours"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "student_id"
    t.index ["student_id"], name: "index_student_progresses_on_student_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "control_number"
    t.string "name"
    t.string "email"
    t.string "pass"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "career_id"
    t.index ["career_id"], name: "index_students_on_career_id"
  end

  create_table "studied_subjects", force: :cascade do |t|
    t.integer "semester"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "student_progress_id"
    t.bigint "subject_id"
    t.index ["student_progress_id"], name: "index_studied_subjects_on_student_progress_id"
    t.index ["subject_id"], name: "index_studied_subjects_on_subject_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.integer "credits"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "student_progresses", "students"
  add_foreign_key "students", "careers"
  add_foreign_key "studied_subjects", "student_progresses"
  add_foreign_key "studied_subjects", "subjects"
end
