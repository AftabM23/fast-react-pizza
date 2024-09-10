/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, pizzaQuantity } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteButton from '../../ui/DeleteButton';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzaCount = useSelector(pizzaQuantity(id));
  const dispatch = useDispatch();

  function handleAddtoCart() {
    dispatch(addItem(pizza));
    console.log(pizza);
  }
  return (
    <li className="flex gap-2 px-2 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'grayscale' : ''}`}
      />
      <div className="flex grow flex-col py-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-400">Sold out</p>
          )}
          {pizzaCount && (
            <div className="flex">
              <UpdateItemQuantity pizzaId={id} quantity={pizzaCount} />
              <DeleteButton pizzaId={id} />
            </div>
          )}
          {!pizzaCount && !soldOut && (
            <Button disabled={soldOut} onClick={handleAddtoCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
