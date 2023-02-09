class User < ActiveRecord::Base
has_many :visits 
has_many :menu_itmes, through: :visits




end



