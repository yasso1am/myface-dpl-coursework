Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :posts
    resources :users, except: :update
    resources :comments
    put 'users/make_friend', to: 'users#make_friend'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
