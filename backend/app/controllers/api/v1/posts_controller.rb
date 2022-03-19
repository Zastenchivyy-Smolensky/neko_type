class Api::V1::PostsController < ApplicationController
  before_action :authenticate_api_v1_user!, only: [:create, :update, :destroy]
  def index
    render json: Post.all.to_json(include: :detail_info)
  end

  def show
    render json: Post.find(params[:id]).to_json(include: :detail_info)
  end

  def create
    ActiveRecord::Base.transaction do
      post = Post.new(post_params)
      detail_info = post.build_detail_info(detail_info_params)
      if post.save && detail_info.save
        render json: post.to_json(include: :detail_info)
      else
        ender json: { post: post.errors, detail_info: detail_info.errors }, status: 422
      end
    end
  end

  def update
    post = Post.find(params[:id])
    detail_info = DetailInfo.find_by(post_id: params[:id])
    if current_api_v1_user.id == post.user_id
      ActiveRecord::Base.transaction do
          if post.update(post_params) && detail_info.update(detail_info_params)
            render json: post.to_json(include: :detail_info)
          else
            render json: { post: post.errors, detail_info: detail_info.errors }, status: 422
          end
      end
    else
      render json: {message:"can not update data"}, status: 422
    end
  end

  def destroy
    post = Post.find(params[:id])
    if current_api_v1_user.id == post.user_id
      post.destroy
      render json: post.to_json(include: :detail_info)
    else
      render json: {message: "can not delete data"}, status: 422
    end
  end

  private
    def post_params
      params.require(:post).permit(:name, :neko_type).merge(user_id: current_api_v1_user.id)
    end

    def detail_info_params
      params.require(:detail_info).permit(:favorite_food, :favorite_toy)
    end
end