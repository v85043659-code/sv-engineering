import Types "types/inquiry";
import List "mo:core/List";
import InquiryMixin "mixins/inquiry-api";

actor {
  let inquiries = List.empty<Types.Inquiry>();
  let nextInquiryId = { var value : Nat = 0 };

  include InquiryMixin(inquiries, nextInquiryId);
};
