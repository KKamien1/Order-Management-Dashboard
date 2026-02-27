import z from 'zod';

export const CountrySchema = z.string();

export type TCountry = z.infer<typeof CountrySchema>;
