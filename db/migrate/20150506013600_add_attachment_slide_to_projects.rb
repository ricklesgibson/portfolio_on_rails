class AddAttachmentSlideToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :slide
    end
  end

  def self.down
    remove_attachment :projects, :slide
  end
end
