import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce(
      (total, item) => total + item.quantity * item.unitPrice,
      0,
    ),
  );

  const totalPizzas = useSelector((state) =>
    state.cart.cart.reduce(
      (totalPizzas, item) => totalPizzas + item.quantity,
      0,
    ),
  );

  return (
    <div className="flex justify-between bg-stone-800 p-2 text-center uppercase text-stone-200 md:p-4">
      <p className="space-x-5">
        <span>{totalPizzas} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
