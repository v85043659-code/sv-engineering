import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  public type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    requirement : Text;
    createdAt : Timestamp;
  };

  public type InquiryRequest = {
    name : Text;
    phone : Text;
    requirement : Text;
  };

  public type SubmitResult = {
    #ok : Nat;
    #err : Text;
  };
};
