import z from 'zod';
import {IdSchema} from '../common.schema';
import {CountrySchema} from './country.schema';
import {PriceSchema} from './price.schema';
import {ShippingSchema} from './shipping.schema';

export const OrderSchema = IdSchema.extend({
  price: PriceSchema,
  country: CountrySchema,
  shipping: ShippingSchema,
});

export const OrdersSchema = z.array(OrderSchema);

export type TOrder = z.infer<typeof OrderSchema>;
export type TOrders = z.infer<typeof OrdersSchema>;
