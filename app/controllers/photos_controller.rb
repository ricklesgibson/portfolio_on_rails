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
  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.html { redirect_to @project, notice: 'Photo was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo }
      else
        format.html { render :edit }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Photo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def photo_params
    params.require(:photo).permit(:slide, :caption)
  end
end