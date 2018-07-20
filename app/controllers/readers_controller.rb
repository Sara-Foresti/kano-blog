class ReadersController < ApplicationController
  def new
    @reader = Reader.new
  end

  def create
    @reader = Reader.new(reader_params)
    if @reader.save
      redirect_to root_path
    else
      render "pages/home"
    end

  end

  def reader_params
    params.require(:reader).permit(:email, :name, :message)
  end
end