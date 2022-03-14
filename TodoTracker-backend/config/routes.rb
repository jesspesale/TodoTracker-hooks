Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :lists do
          resources :list_items
      end
    end
  end
end
