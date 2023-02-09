class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/menu_items" do
    menu_items = MenuItem.all.order(:price)
    menu_items.to_json
  end

  get "/users" do 
    users = User.all.order(:name)
    users.to_json
  end

  get "/user_match" do 
    user_match = User.all
  end

  post '/users' do 
    user = User.find(params[:id])
    user.to_json
  end
  

end
