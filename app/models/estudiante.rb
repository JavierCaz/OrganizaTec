class Estudiante < ApplicationRecord
    belong_to :estudiante_progreso
    belong_to :carrera
end
