puts "🌱 Seeding spices..."
MenuItem.destroy_all 
User.destroy_all
Visit.destroy_all 

price = rand(5..100)

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, dinner: true, vegitarian: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, breakfast: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, lunch: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, raw: true)
end


5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, shellfish: true)
end

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, peanuts: true)
end

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, gluten: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, fish: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, dairy: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, need_how_cooked: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, happy_hour: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, monday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, tuesday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, wednesday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, thursday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, friday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, saturday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, sunday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, custom: true)
end
5. times do 
    MenuItem.create(name: Faker::Coffee.blend_name, price: rand(5..100), description: Faker::Coffee.notes, drink:true, all_times: true)
end

5. times do 
    MenuItem.create(name: Faker::Beer.name, price: rand(5..100), description: Faker::Coffee.notes, alcohol:true, all_times: true)
end


User.create(name: "Jake", email: "jakediehl17@gmail.com", password: "password", gluten: true, dairy: true, uuid:12345)


20. times do 
    User.create(name: Faker::Name.name, email:Faker::Internet.email, password: Faker::Internet.password)
end

puts "✅ Done seeding!"
