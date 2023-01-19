# puts "🌱 Seeding spices..."

# Seed your database here
puts "Deleting Goal/Task data..."
Goal.destroy_all
Task.destroy_all

puts "Creating goals..."
essay = Goal.create( name: "English Essay", due_date: Date.new(2023,1,20) )
laundry = Goal.create( name: "Laundry", due_date: Date.new(2023,1,18) )
finish_ruby_module = Goal.create( name: "Finish Ruby Module", due_date: Date.new(2023,1,22) )

puts "Creating tasks..."
prep_laundry = Task.create( 
  name: "Prep Laundry", 
  description: "separate clothes and get quarters", 
  completed: true, 
  goal: laundry )
finish_laundry = Task.create( 
  name: "Finish Laundry", 
  description: "go to laundry mat to actually wash and fold clothes", 
  completed: false, 
  goal: laundry  )
essay_outline = Task.create( 
  name: "Create Essay outline", 
  description: "Research and do an essay outline", 
  completed: true, 
  goal: essay )
ruby_module = Task.create( 
  name: "Finish Ruby Module on Canvas", 
  description: "set timer and finish the rest of ruby module", 
  completed: false, 
  goal: finish_ruby_module )



puts "✅ Done seeding!"
