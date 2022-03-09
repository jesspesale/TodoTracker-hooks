class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed, :list_id

  belongs_to :list
end
