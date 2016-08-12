class ItemsController < ApplicationController
  def index
    @brands = Brand.all
    render json: @brands
  end
  
  def create
    @brand = Brand.new(brands_params)
    if @brand.save
      render json: @brand
    else
      render json: { status: "not ok" }
    end
  end
  
  private
  
    def brands_params
      params.require(:item).permit(:name)
    end
end