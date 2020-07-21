Rails.application.routes.draw do
  devise_for :students, controllers: {registrations: "registrations" }
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'welcome/login'
  post 'welcome/login/verifyUser', to: 'log_in#verifyUser'
  
  get 'welcome/signup'
  get 'welcome/sign_up/get_careers', to: 'sign_up#get_careers'
  post 'welcome/sign_up/create_student', to: 'sign_up#create_student'
  
  get 'welcome/signedin'
  get  'welcome/signedin/get_careers', to: 'signedin#get_careers'

end
