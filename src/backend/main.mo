import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type Message = {
    name : Text;
    email : Text;
    content : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compareByTimestamp(message1 : Message, message2 : Message) : Order.Order {
      Int.compare(message1.timestamp, message2.timestamp);
    };
  };

  let messages = Map.empty<Time.Time, Message>();
  var visitorCount = 0;

  public shared ({ caller }) func submitMessage(name : Text, email : Text, content : Text) : async () {
    let timestamp = Time.now();
    let message : Message = {
      name;
      email;
      content;
      timestamp;
    };
    messages.add(timestamp, message);
    visitorCount += 1;
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray().sort(Message.compareByTimestamp);
  };

  public query ({ caller }) func getVisitorCount() : async Nat {
    visitorCount;
  };
};
