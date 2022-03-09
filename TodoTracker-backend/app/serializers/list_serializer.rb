class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed

  has_many :list_items
end
