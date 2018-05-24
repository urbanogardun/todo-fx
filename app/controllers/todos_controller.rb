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
        puts params
        # Todo
        todo_subject = params[:item]
        due_date = params[:due].empty? ? DateTime.now : DateTime.parse(params[:due])
        priority = params[:priority]
        user_id = params[:user_id]

        Todo.create({:item => todo_subject, :due => due_date, :priority => priority, :user_id => user_id}).save!

    end
end
