import z from 'zod';
import {EntitySchema} from '../common.schema';
import {CountrySchema} from './country.schema';
import {PriceSchema} from './price.schema';
import {ShippingSchema} from './shipping.schema';

export const OrderSchema = EntitySchema.extend({
  price: PriceSchema,
  country: CountrySchema,
  shipping: ShippingSchema,
});

export const OrdersSchema = z.array(OrderSchema);

export type TOrder = z.infer<typeof OrderSchema>;
export type TOrders = z.infer<typeof OrdersSchema>;
