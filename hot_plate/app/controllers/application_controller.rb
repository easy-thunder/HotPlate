
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

get "/visits/:price_total" do 
  visits = Visit.find(params[:price_total])
  visits.to_json
end

get '/visits' do
  visits = Visit.all
  visits.to_json
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

  end
end


post '/visits' do 
  visit = Visit.create(params)
  visit.to_json
end


  patch '/users/:id' do 
    user = User.find(params[:id])
    user.update(params)
    user.to_json


  end

patch '/users/:id/orders' do 
user = User.find(params[:id])
user.menu_items << params
end

patch '/visits/:price_total' do
  visits = Visit.find(params[:price_total])
  visits.check_number + params
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

  delete '/users/:id' do 
    user = User.find(params[:id])
    user.destroy
  end


  post '/menu_items' do
    menu_items = MenuItem.create(params)
    menu_items.to_json
  end
  
end




