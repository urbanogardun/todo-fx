class UserController < ApplicationController

    def check_user
        if current_user.nil?
            render json: false
        else
            render json: current_user
        end
    end

end
