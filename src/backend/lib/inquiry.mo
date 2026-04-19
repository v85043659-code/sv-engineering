import Types "../types/inquiry";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type Inquiry = Types.Inquiry;
  public type InquiryRequest = Types.InquiryRequest;

  public func submit(
    inquiries : List.List<Inquiry>,
    nextId : { var value : Nat },
    req : InquiryRequest,
  ) : Nat {
    let id = nextId.value;
    nextId.value += 1;
    let inquiry : Inquiry = {
      id;
      name = req.name;
      phone = req.phone;
      requirement = req.requirement;
      createdAt = Time.now();
    };
    inquiries.add(inquiry);
    id;
  };

  public func listAll(inquiries : List.List<Inquiry>) : [Inquiry] {
    inquiries.toArray();
  };
};
