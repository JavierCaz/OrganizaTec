class SignUpController < ApplicationController
  def get_students
    subjects = Student.all
    render json: subjects
  end
  
  def get_careers
    carreras = Career.all
    render json: carreras
  end

  def create_student
    Student.create(control_number: params[:noControl], email: params[:correo], pass: params[:pass], name: params[:nombre], career_id: params[:carrera_id])
    render json: {}
  end
end
