/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from '../cart/cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';
import DeleteButton from '../../ui/DeleteButton';

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const dispatch = useDispatch();

  const hanldeDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="mt-3 list-none md:flex md:justify-between">
      <p className="font-bold">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between text-sm md:space-x-2">
        <p>{formatCurrency(Number(unitPrice * quantity))}</p>
        <UpdateItemQuantity quantity={quantity} pizzaId={pizzaId} />

        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
