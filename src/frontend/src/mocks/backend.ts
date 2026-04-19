import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getInquiries: async () => [
    {
      id: BigInt(1),
      name: "Rajesh Kumar",
      createdAt: BigInt(Date.now() * 1_000_000),
      requirement: "Need 10x double acting pneumatic cylinders, bore 50mm",
      phone: "9876543210",
    },
    {
      id: BigInt(2),
      name: "Priya Shah",
      createdAt: BigInt(Date.now() * 1_000_000),
      requirement: "Solenoid valves 5/2 way, 24V DC, qty 20",
      phone: "8765432109",
    },
  ],
  submitInquiry: async (_req) => ({ __kind__: "ok", ok: BigInt(3) }),
};
