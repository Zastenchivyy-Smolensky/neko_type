class CreateDetailInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :detail_infos do |t|
      t.references :post, null: false
      t.string :favorite_food, limit: 100
      t.string :favorite_toy, limit: 100
      t.timestamps
    end
  end
end
