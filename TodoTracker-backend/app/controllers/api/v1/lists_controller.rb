class Api::V1::ListsController < ApplicationController

    def index
        @lists = List.all 
        render json: @lists
    end

    def create
        @list = List.create(list_params)

        if @list.save
            render json: @list
        else
            render json: {error: "Error creating the list"}
        end
    end

    def show
        @list = List.find(params[:id])
        render json: @list
    end

    def destroy
        @list = List.find(params[:id])
        @list.destroy
    end

    private

    def list_params
        params.require(:list).permit(:title, :completed)
    end

end
