import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, pizzaCart } from '../cart/cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const newCart = useSelector(pizzaCart);

  const cart = newCart;
  const username = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-3 text-xl font-bold">Your cart, {username}</h2>
      <div className="ms:flex mx-2 mt-2 divide-y-2 border-b-2 border-solid py-2 pb-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>

        <Button onClick={handleClearCart} type="clearBtn">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
