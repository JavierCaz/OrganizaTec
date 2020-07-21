class SignedinController < ApplicationController
    def get_careers
        carreras = Career.all
        render json: carreras
    end
end
