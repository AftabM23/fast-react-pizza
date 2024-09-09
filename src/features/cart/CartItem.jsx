/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from '../cart/cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseQuantity(pizzaId));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(pizzaId));
  };
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

        <div>
          {quantity > 1 && (
            <Button type="small" onClick={handleDecrement}>
              -
            </Button>
          )}

          <input value={quantity} />
          <Button type="small" onClick={handleIncrement}>
            +
          </Button>
        </div>
        {quantity === 0 && hanldeDeleteItem()}
        <Button onClick={hanldeDeleteItem} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
