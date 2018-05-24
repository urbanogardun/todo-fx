class Todo < ApplicationRecord
  belongs_to :user

  validates :item, presence: true
  validates :priority, presence: true
  validates :user_id, presence: true
end
