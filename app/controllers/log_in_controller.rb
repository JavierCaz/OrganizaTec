class LogInController < ApplicationController
  def verifyUser
    res = false

    if (Student.where("email = ? AND pass = ?", params[:email], params[:pass]).take != nil)
      res = true
    end

    render json: {res: res}
  end
end
