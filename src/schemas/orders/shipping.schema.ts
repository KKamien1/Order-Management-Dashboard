import z from 'zod';

export const ShippingSchema = z.date();

export type TShipping = z.infer<typeof ShippingSchema>;
