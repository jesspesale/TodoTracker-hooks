class Api::V1::ListItemsController < ApplicationController

    before_action :set_list

    def index
        @list_items = @list.list_items
        render json: @list_items
    end

    
    def show
        @list_item = ListItem.find(params[:id])
        render json: @list_item
    end

    def update
        @list_item = ListItem.find(params[:id])
        @list_item.update(list_item_params)
        render json: @list_item
    end
    
    def create
        @list_item = @list.list_items.build(list_item_params)
        if @list_item.save
            render json: @list
        else
            render json: {error: "Error creating list item"}
        end
    end

    def destroy
        @list_item = @list.list_items.find_by(id: params[:id])
        @list_item.destroy
        @new_list = List.find_by(id: params[:list_id])
        render json: @new_list
    end

    private

    def set_list
        @list = List.find(params[:list_id])
    end

    def list_item_params
        params.require(:list_item).permit(:description, :completed, :list_id)
    end

end
