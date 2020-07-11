class Student < ApplicationRecord
    belongs_to :careeer
    has_one :student_progress
end
