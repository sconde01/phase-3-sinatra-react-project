class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.boolean :completed
      
      t.timestamps
      t.belongs_to :goal, foreign_key: true
    end
  end
end
