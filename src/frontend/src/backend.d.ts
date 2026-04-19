import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmitResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export type Timestamp = bigint;
export interface Inquiry {
    id: bigint;
    name: string;
    createdAt: Timestamp;
    requirement: string;
    phone: string;
}
export interface InquiryRequest {
    name: string;
    requirement: string;
    phone: string;
}
export interface backendInterface {
    getInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(req: InquiryRequest): Promise<SubmitResult>;
}
