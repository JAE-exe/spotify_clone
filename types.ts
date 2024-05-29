import Stripe from "stripe";

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  avatarUrl?: string;
  billingAddress?: Stripe.Address;
  paymentMethod?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}
