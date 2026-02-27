import z from 'zod';

export const PriceSchema = z.number();

export type TPrice = z.infer<typeof PriceSchema>;
