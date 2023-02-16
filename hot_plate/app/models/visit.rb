class Visit < ActiveRecord::Base 
    belongs_to :user 
    belongs_to :menu_item
    has_many :menu_items
    
    # belongs_to :menu_item
end