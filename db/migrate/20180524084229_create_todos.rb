class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.text :item
      t.datetime :due
      t.integer :priority
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
