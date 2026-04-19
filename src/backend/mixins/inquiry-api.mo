import Types "../types/inquiry";
import InquiryLib "../lib/inquiry";
import List "mo:core/List";

mixin (
  inquiries : List.List<Types.Inquiry>,
  nextInquiryId : { var value : Nat },
) {
  public func submitInquiry(req : Types.InquiryRequest) : async Types.SubmitResult {
    if (req.name == "") {
      return #err("Name is required");
    };
    if (req.phone == "") {
      return #err("Phone is required");
    };
    if (req.requirement == "") {
      return #err("Requirement is required");
    };
    let id = InquiryLib.submit(inquiries, nextInquiryId, req);
    #ok(id);
  };

  public query func getInquiries() : async [Types.Inquiry] {
    InquiryLib.listAll(inquiries);
  };
};
