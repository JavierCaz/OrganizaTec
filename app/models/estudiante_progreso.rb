class EstudianteProgreso < ApplicationRecord
    has_one :estudiante
    has_many :materias_cursadas
end
