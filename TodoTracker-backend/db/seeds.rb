# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list1 = List.create(title: "After Work", completed: false)
list1_item1 = ListItem.create(description: "Go to the gym", completed: false, list_id: 1)
list1_item2 = ListItem.create(description: "Make lunch for tomorrow", completed: false, list_id: 1)

list2 = List.create(title: "Grocery Shopping", completed: false)
list2_item2 = ListItem.create(description: "Eggs", completed: false, list_id: 2)
list2_item2 = ListItem.create(description: "Milk", completed: false, list_id: 2)
# rake db:drop -> rake db:migrate -> rake db:seed
#  OR rake db:reset