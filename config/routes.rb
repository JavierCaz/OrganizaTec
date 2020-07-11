Rails.application.routes.draw do
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'welcome/login'
  post 'welcome/login/verifyUser', to: 'log_in#verifyUser'

  get 'welcome/signup'

  get 'welcome/sign_up/get_subjects', to: 'sign_up#get_subjects'
  get 'welcome/sign_up/get_students', to: 'sign_up#get_students'
  get 'welcome/sign_up/get_careers', to: 'sign_up#get_careers'
  post 'welcome/sign_up/create_student', to: 'sign_up#crear_student'  
  post 'welcome/sign_up/create_subject', to: 'sign_up#create_subject'  
end
