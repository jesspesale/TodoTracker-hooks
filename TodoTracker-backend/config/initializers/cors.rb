
# origin - gives whatever server / url tyou put there access to your db

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' 

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
