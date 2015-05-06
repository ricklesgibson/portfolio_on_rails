class Photo < ActiveRecord::Base
  belongs_to :project

    has_attached_file :slide, 
   :styles => {
    :original => "4912x3264>"}, 
    :default_url => "/images/:style/missing.png"
    validates_attachment_content_type :slide, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
