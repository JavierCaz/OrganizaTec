class Estudiante < ApplicationRecord
    belongs_to :estudiante_progreso
    belongs_to :carrera
end
