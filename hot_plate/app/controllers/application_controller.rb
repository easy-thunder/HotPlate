class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/menu_items" do
    menu_items = MenuItem.all.order(:price)
    menu_items.to_json
  end
  

end
