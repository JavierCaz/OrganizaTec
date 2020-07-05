class MateriasCursada < ApplicationRecord
    belongs_to :estudiante_progreso
    belongs_to :subject
end
