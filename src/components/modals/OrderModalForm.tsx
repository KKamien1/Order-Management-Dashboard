import {useCreateOrder} from '@/hooks/useCreateOrder';
import {useUpdateOrder} from '@/hooks/useUpdateOrder';
import type {TOrder} from '@/schemas';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import {useState} from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  order?: TOrder;
};

const EMPTY_FORM = {country: '', price: '', shipping: ''};

const orderToForm = (order: TOrder) => ({
  country: order.country,
  price: String(order.price),
  shipping: new Date(order.shipping).toISOString().split('T')[0],
});

export function OrderModalForm({open, onClose, order}: Props) {
  const [form, setForm] = useState(() => order ? orderToForm(order) : EMPTY_FORM);
  const {mutate: createMutate, isPending: isCreating} = useCreateOrder();
  const {mutate: updateMutate, isPending: isUpdating} = useUpdateOrder();
  const isPending = isCreating || isUpdating;
  const isEdit = order !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      id: isEdit ? order.id : crypto.randomUUID(),
      country: form.country,
      price: Number(form.price),
      shipping: new Date(form.shipping),
    };
    const mutate = isEdit ? updateMutate : createMutate;
    mutate(payload, {onSuccess: onClose});
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='xs'>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{isEdit ? 'Edit Order' : 'Add Order'}</DialogTitle>
        <DialogContent
          sx={{display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important'}}
        >
          <TextField
            label='Country'
            name='country'
            value={form.country}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label='Price'
            name='price'
            type='number'
            inputProps={{min: 0, step: 'any'}}
            value={form.price}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label='Shipping date'
            name='shipping'
            type='date'
            slotProps={{inputLabel: {shrink: true}}}
            value={form.shipping}
            onChange={handleChange}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type='submit' variant='contained' disabled={isPending}>
            {isPending ? 'Saving…' : isEdit ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
