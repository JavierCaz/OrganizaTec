class EstudianteProgreso < ApplicationRecord
    belongs_to :estudiante
    has_many :materias_cursadas
end
