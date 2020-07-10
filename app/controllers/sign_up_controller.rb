class SignUpController < ApplicationController
  def get_subjects
    @subjects = Subject.all
    render json: @subjects
  end

  def create_student
    Estudiante.create(noControl: params[:noControl], correo: params[:correo], pass: params[:pass], nombre: params[:nombre], carrera_id: params[:carrera_id])
    render json: {}
  end

  def create_subject
    subject_id = params[:id]
    Subject.create(id: params[:id])
  end
end
