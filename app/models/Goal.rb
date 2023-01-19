class Goal < ActiveRecord::Base
  has_many :tasks

  #returns all goals in order by nearest due_date 
  def self.all_goals
    Goal.all.order(:due_date)
  end
   
  #returns the first goal that is nearest to due_date
  def self.first_goal
    Goal.all.order(:due_date).first
  end

  #returns all tasks related to a goal
  def goal_tasks
    self.tasks.all
  end
end