class Message < ApplicationRecord

  def random_message
    Message.all.sample
  end
end
