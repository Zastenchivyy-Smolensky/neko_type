class Post < ApplicationRecord
    belongs_to :user
    has_one :detail_info, dependent: :destroy
end
