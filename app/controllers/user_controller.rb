class UserController < ApplicationController

    def check_user
        render json: current_user
    end

end
