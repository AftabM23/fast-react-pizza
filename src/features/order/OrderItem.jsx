/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  let key = 0;
  return (
    <li className="flex list-none flex-col justify-between px-4 py-2 sm:flex-row">
      <div>
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <div className="flex flex-row text-sm capitalize italic text-stone-500">
          {isLoadingIngredients ? 'loading' : <p>{ingredients?.join(',')}</p>}
          {/* {ingredients.map((item) => (
          <p className="px-2 text-slate-600">{item + ','}</p>
        ))} */}
        </div>
      </div>

      <p className="font-bold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
