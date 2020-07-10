Rails.application.routes.draw do
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'welcome/login'
  post 'welcome/login/verifyUser', to: 'log_in#verifyUser'

end
