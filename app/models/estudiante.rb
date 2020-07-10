class Estudiante < ApplicationRecord
    has_one :estudiante_progreso
    belongs_to :carrera
end
