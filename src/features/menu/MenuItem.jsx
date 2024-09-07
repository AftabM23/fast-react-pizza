import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-2 px-2 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'grayscale' : ''}`}
      />
      <div className="flex grow flex-col py-2">
        <p className="font-medium">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between text-xs">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-400">Sold out</p>
          )}
          <Button>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
