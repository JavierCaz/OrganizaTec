class WelcomeController < ApplicationController
    before_action :authenticate_student!

    def index
        if student_signed_in?
        else
            redirect_to new_student_session_path
        end
    end
end
