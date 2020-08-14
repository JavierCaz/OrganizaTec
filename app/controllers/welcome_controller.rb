class WelcomeController < ApplicationController
    before_action :authenticate_student!

    def index
        if student_signed_in?
            # redirect_to welcome_signedin_path
        else
            redirect_to new_student_session_path
        end
    end

    def profile
        @career = Career.find_by(id: current_student.career_id)
    end

    def updateProfile
        user = Student.find_by(id: current_student.id)
        user.name = params[:name]
        user.control_number = params[:control_number]
        user.save
    end
end
