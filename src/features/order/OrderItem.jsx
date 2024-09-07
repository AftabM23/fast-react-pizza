/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex list-none flex-col justify-between px-4 py-2 sm:flex-row">
      <p>
        <span className="font-bold">{quantity}&times;</span> {name}
      </p>
      <p className="font-bold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
