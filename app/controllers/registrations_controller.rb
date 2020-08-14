class RegistrationsController < Devise::RegistrationsController
    
    private
    def sign_up_params
        params.require(:student).permit(:control_number, :name, :email, :career_id, :password, :password_confirmation)
    end

    def account_update_params
        params.require(:student).permit(:control_number, :name, :email, :career_id, :password, :password_confirmation, :current_password)
    end
end