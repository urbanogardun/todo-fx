Rails.application.routes.draw do
  resources :todos
  # devise_for :users

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get '/users/check_user', to: 'user#check_user' 
end
