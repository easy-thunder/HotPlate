class Visit < ActiveRecord::Base 
    belongs_to :user 
    belongs_to :menu_item
    
    # belongs_to :menu_item
end