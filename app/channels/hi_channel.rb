class HiChannel < ApplicationCable::Channel
  def subscribed
    stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message
    ActionCable.server.broadcast "some_channel", {email: 'johnson@5xruby.com', name: 'johnson'}
  end
end
