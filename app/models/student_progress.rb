class StudentProgress < ApplicationRecord
    belongs_to :student
    has_many :studied_subjects
end
