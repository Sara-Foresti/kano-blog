class CreateReaders < ActiveRecord::Migration[5.2]
  def change
    create_table :readers do |t|
      t.string :email
      t.string :name
      t.text :message

      t.timestamps
    end
  end
end
