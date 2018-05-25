require 'date'

class TodosController < ApplicationController
    skip_before_action :verify_authenticity_token  
    
    # GET /todos/:user_id
    def show
        # Id 23 is of user bloom@gmail.com
        todos = Todo.where user_id: params[:user_id]
        render json: todos
    end

    # POST /todos
    def create
        todo_subject = params[:item]
        due_date = params[:due].empty? ? DateTime.now : DateTime.parse(params[:due])
        priority = params[:priority]
        user_id = params[:user_id]

        todo = Todo.new({:item => todo_subject, :due => due_date, :priority => priority, :user_id => user_id})

        if todo.save
            render json: todo
        else
            render json: false
        end

    end

    # PATCH /todos
    def update
        todo_subject = params[:item]
        due_date = params[:due].empty? ? DateTime.now : DateTime.parse(params[:due])
        priority = params[:priority]

        todo = Todo.find(params[:id])
        todo.update({:item => todo_subject, :due => due_date, :priority => priority})
    end

    # DELETE /todos/:id
    def destroy
        todo = Todo.find(params[:id])
        todo.destroy
    end

    # PATCH /todos/:id/complete
    # Toggle between completing todo item
    def complete_todo
        todo = Todo.find(params[:id])
        todo_completed = todo.completed ? false : true
        todo.update(completed: todo_completed)
    end

end
