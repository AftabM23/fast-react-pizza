import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-800 p-2 text-center uppercase text-stone-200 md:p-4">
      <p className="space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
