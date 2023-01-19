class Task < ActiveRecord::Base
  belongs_to :goal
  
  #returns all completed tasks
  def self.completed
    self.all.where("completed = '1'")
  end

  #returns all tasks NOT completed
  def self.not_completed
    self.all.where("completed = '0'")
  end

  def goal_name
    "#{goal.name}"
  end
end