import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu" className="bg-black">
        &larr; Back to menu
      </Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
