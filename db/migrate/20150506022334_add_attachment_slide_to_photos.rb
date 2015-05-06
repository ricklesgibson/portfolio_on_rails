class AddAttachmentSlideToPhotos < ActiveRecord::Migration
  def self.up
    change_table :photos do |t|
      t.attachment :slide
    end
  end

  def self.down
    remove_attachment :photos, :slide
  end
end
