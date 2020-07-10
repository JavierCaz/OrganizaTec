class SignUpController < ApplicationController
  def get_subjects
    @subjects = Subject.all
    puts 'AAAAAAAAAAAAAAAAAAAAAAAAA'
    render json: @subjects
  end

  def create_student
    puts 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    @estudiante = Estudiante.create(id: params[:id])

      render json: {status: :created, location: @estudiante}
  end

  def create_subject
    puts 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
    subject_id = params[:id]
    Subject.create(id: params[:id])
  end
end
