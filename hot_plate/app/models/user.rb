class User < ActiveRecord::Base
has_many :visits 
has_many :menu_itmes, through: :visits

def self.user_match(email, password)

email_valid =  self.all.map do |user|
if user.email == email && user.password == password
    user
else false
end
end
end



end





