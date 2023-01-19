class TasksController < ApplicationController

  # Create tasks and specifics for tasks using a form (CREATE)
  # Mark task as complete update (PATCH)
  # Delete tasks (DELETE)

   #index route
   get "/tasks" do
    @tasks = Task.all
    @tasks.to_json(include: [
      goal: {except: [:created_at, :updated_at]}
      ])
  end

  #show route 
  get "/tasks/:id" do
    find_task
    @task.to_json(include: [
      goal: {except: [:created_at, :updated_at]}
      ]) 
  end

  #create route 
  post "/tasks" do
    @task = Task.create(params)
    @task.to_json(include: [
      goal: {except: [:created_at, :updated_at]}
      ])
  end

  #update route 
  patch "/tasks/:id" do
    find_task
    @task.update(completed: params[:completed])
    @task.to_json(include: [
      goal: {except: [:created_at, :updated_at]}
      ])
  end

  #destroy route
  delete "/tasks/:id" do
    find_task
    @task.destroy
    { message: "#{@task.name} was destroyed" }.to_json
  end

  private

    def find_task
      @task = Task.find(params[:id])
    end
end