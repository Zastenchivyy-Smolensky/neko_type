class Api::V1::UsersController < ApplicationController
    def show
      render json: Post.where(user_id: params[:id]).to_json(include: :detail_info)
    end
  
end
