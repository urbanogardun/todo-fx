class TodosController < ApplicationController
    
    # GET /todos/:user_id
    def show
        # Id 23 is of user bloom@gmail.com
        todos = Todo.where user_id: params[:user_id]
        render json: todos
    end
end
