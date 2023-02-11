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

  get "/users/:id" do 
    user = User.find(params[:id])
    user.to_json
  end

  post "/users" do

    authorize = User.user_authorize(params[:email], params[:password])

    if authorize == true
      user = User.create(params)
      user.to_json
    elsif false 
      alert('')
    end
  end


  


  get "/users/:email/:password" do 
   user = User.user_match(params[:email], params[:password])
   user.to_json
    # User.find(params[:email])
  end





  post '/users' do 
    user = User.find(params[:id])
    user.to_json
  end











end




