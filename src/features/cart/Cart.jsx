import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-bold">Your cart, %NAME%</h2>
      <div className="mt-2 divide-y-2 border-b-2 border-solid py-2 pb-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </div>

      <div className="mt-4">
        <Button to="/order/new">Order Pizzas</Button>

        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
