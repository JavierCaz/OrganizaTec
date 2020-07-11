class StudiedSubject < ApplicationRecord
    belongs_to :student_progress
    belongs_to :subject
end
