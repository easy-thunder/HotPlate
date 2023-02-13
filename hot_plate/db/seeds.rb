puts "🌱 Seeding spices..."
MenuItem.destroy_all 
User.destroy_all
Visit.destroy_all 

price = rand(5..100)

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, dinner: true, vegitarian: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, appetizer: true, breakfast: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, appetizer: true, lunch: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, all_times: true, raw: true)
end


5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, all_times: true, shellfish: true)
end

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, dessert: true, lunch: true, peanuts: true)
end

5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, dessert: true, breakfast: true, gluten: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, dinner: true, fish: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, appetizer: true, lunch: true, dairy: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, dessert: true, brunch: true, need_how_cooked: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, happy_hour: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, brunch: true, monday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, breakfast: true, tuesday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, appetizer: true, dinner: true, wednesday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, lunch: true, thursday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, breakfast: true, friday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, entree: true, dinner: true, saturday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, dessert: true, lunch: true, sunday: true)
end
5.times do 
    MenuItem.create(name: Faker::Food.dish, price: rand(5..100), description: Faker::Food.description, appetizer: true, brunch: true, custom: true)
end
5. times do 
    MenuItem.create(name: Faker::Coffee.blend_name, price: rand(5..100), description: Faker::Coffee.notes, drink:true, all_times: true)
end

5. times do 
    MenuItem.create(name: Faker::Beer.name, price: rand(5..100), description: Faker::Coffee.notes, alcohol:true, all_times: true)
end


User.create(name: "Jake", email: "jakediehl17@gmail.com", password: "password", gluten: true, dairy: true, uuid:12345)




puts "✅ Done seeding!"
