class Student < ApplicationRecord
    belongs_to :career
    has_one :student_progress
end
