class Post < ApplicationRecord
    has_one :detail_info, dependent: :destroy
end
