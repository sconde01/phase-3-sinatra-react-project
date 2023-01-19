class GoalsController < ApplicationController

  #index route
  get "/goals" do
    @goals = Goal.all
    @goals.to_json(include: [:tasks])
  end

  #show route 
  get "/goals/:id" do
    find_goal
    @goal.to_json(include: [:tasks]) 
  end

  #create route 
  post "/goals" do
    @goal = Goal.create(params)
    @goal.to_json(include: [:tasks])
  end

  #update route 
  patch "/goals/:id" do
    find_goal
    @goal.update(name: params[:name])
    @goal.to_json(include: [:tasks])
  end

  #destroy route
  delete "/goals/:id" do
    find_goal
    @goal.destroy
    { message: "#{@goal.name} was destroyed" }.to_json
  end


  private

    def find_goal
      @goal = Goal.find_by_id(params[:id])
    end
end