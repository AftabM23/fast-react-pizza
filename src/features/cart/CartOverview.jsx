import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalPizzas, totalPrice } from './cartSlice';

function CartOverview() {
  const totalCartPrice = useSelector(totalPrice);

  const totalPizzasQuantity = useSelector(totalPizzas);

  return (
    <div className="flex justify-between bg-stone-800 p-2 text-center uppercase text-stone-200 md:p-4">
      <p className="space-x-5">
        <span>{totalPizzasQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
