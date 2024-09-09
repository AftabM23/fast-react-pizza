/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleAddtoCart() {
    dispatch(addItem(pizza));
    console.log(pizza);
    // navigate('/cart');
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
          <Button disabled={soldOut} onClick={handleAddtoCart} type="small">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
