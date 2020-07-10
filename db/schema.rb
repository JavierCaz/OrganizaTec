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

ActiveRecord::Schema.define(version: 2020_07_10_002927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carreras", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "carreras_subjects", id: false, force: :cascade do |t|
    t.bigint "subject_id", null: false
    t.bigint "carrera_id", null: false
  end

  create_table "estudiante_progresos", force: :cascade do |t|
    t.integer "semestre"
    t.integer "actExtra"
    t.integer "ingles"
    t.integer "residencias"
    t.integer "servSocial"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "estudiante_id"
    t.index ["estudiante_id"], name: "index_estudiante_progresos_on_estudiante_id"
  end

  create_table "estudiantes", force: :cascade do |t|
    t.string "noControl"
    t.string "nombre"
    t.string "correo"
    t.string "pass"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "carrera_id"
    t.integer "semestres"
    t.integer "veranos"
    t.index ["carrera_id"], name: "index_estudiantes_on_carrera_id"
  end

  create_table "materias_cursadas", force: :cascade do |t|
    t.integer "semestre"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "estudiante_progreso_id"
    t.bigint "subject_id"
    t.index ["estudiante_progreso_id"], name: "index_materias_cursadas_on_estudiante_progreso_id"
    t.index ["subject_id"], name: "index_materias_cursadas_on_subject_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "nombre"
    t.integer "creditos"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "estudiante_progresos", "estudiantes"
  add_foreign_key "estudiantes", "carreras"
  add_foreign_key "materias_cursadas", "estudiante_progresos"
  add_foreign_key "materias_cursadas", "subjects"
end
