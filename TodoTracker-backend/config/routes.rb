Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :lists do
          resources :list_items
      end
    end
  end
end


# fetch('http://localhost:3000/api/v1/list_items')

# can only access list_items nested through a list
# fetch('http://localhost:3000/api/v1/list/1/list_items')