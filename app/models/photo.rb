class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :url

  belongs_to :owner, :class_name => "User"

  validates :owner_id, :url, :presence => true
end
