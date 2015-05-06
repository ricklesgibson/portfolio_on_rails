class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end
  def new
    @project = current_project_photo
    @photo = Photo.new
  end
  def create
    # Find our user that we should attach to
    #@photo = current_user.photos.new(photo_params)
    #or the standard create:
    @photo = current_project_photo.photos.new(photo_params)
    if @photo.save
      redirect_to projects_path
    else
      render 'new'
    end
  end

  def show

  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to current_project
  end

  def photo_params
    params.require(:photo).permit(:slide)
  end
end