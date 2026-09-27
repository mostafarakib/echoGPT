export interface BillingCycle {
  id: string;
  label: string;
  price: string;
  billedNote: string;
}

export const billingCycles: BillingCycle[] = [
  {
    id: "monthly",
    label: "Monthly",
    price: "$9.99",
    billedNote: "Billed monthly",
  },
  {
    id: "quarterly",
    label: "Quarterly",
    price: "$26.99",
    billedNote: "Billed every 3 months ($8.99/mo)",
  },
  {
    id: "semi-annual",
    label: "Semi-Annual",
    price: "$47.99",
    billedNote: "Billed every 6 months ($7.99/mo)",
  },
  {
    id: "annual",
    label: "Annual",
    price: "$89.99",
    billedNote: "Billed annually ($7.49/mo)",
  },
];
