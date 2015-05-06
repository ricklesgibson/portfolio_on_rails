class Project < ActiveRecord::Base
  
  belongs_to :user
  has_many :photos
  has_attached_file :slide, :styles => { 
    :original => "4912x3264>"}, 
    :default_url => "/images/:style/missing.png"
  
  validates_attachment_content_type :slide, :content_type => /\Aimage\/.*\Z/
end
