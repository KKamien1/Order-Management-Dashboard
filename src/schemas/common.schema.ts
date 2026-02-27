import z from 'zod';

export const IdSchema = z.string();

export const EntitySchema = z.object({
  id: IdSchema,
});

export type TId = z.infer<typeof IdSchema>;
export type TEntity = z.infer<typeof EntitySchema>;
