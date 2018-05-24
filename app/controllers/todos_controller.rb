class TodosController < ApplicationController
    def show
        # Id 23 is of user bloom@gmail.com
        todos = Todo.find_by user_id: 23
        render json: todos
    end
end
