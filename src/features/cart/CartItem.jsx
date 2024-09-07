import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="mt-3 list-none md:flex md:justify-between">
      <p className="font-bold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between text-sm md:space-x-2">
        <p>{formatCurrency(totalPrice)}</p>
        <Button>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
