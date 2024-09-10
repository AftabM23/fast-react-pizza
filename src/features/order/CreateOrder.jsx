import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { clearCart, totalPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const formErrors = useActionData();
  const formErrorsString = JSON.stringify(formErrors);
  console.log(formErrorsString);
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const totalCartPrice = useSelector(totalPrice);
  const isSubmitting = navigation.state === 'submitting';
  const {
    userName: username,
    address,
    status,
    position,
    errorMessage,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const fetchAddr = useSelector(fetchAddress);

  return (
    <div className="relative top-3">
      <h2 className="bold p-4 text-xl font-semibold">
        Ready to order? Lets go!
      </h2>

      <Form method="POST" className="flex grow flex-col px-4 py-2">
        <div className="my-2 flex flex-col gap-2 md:flex-row md:items-center">
          <label className="md:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input md:grow"
            defaultValue={username}
          />
        </div>

        <div className="my-2 flex flex-col gap-2 md:flex-row md:items-center">
          <label className="md:basis-40">Phone number</label>
          <div className="flex grow flex-col">
            <input type="tel" name="phone" required className="input" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-lg bg-red-700 px-2 py-1.5 text-sm text-red-100">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="my-2 flex flex-col gap-2 md:flex-row md:items-center">
          <label className="md:basis-40">Address</label>
          <input
            type="text"
            name="address"
            required
            className="input grow"
            defaultValue={address ? address : ''}
            disabled={status === 'loading'}
          />
          {!address && !errorMessage && (
            <Button type="small" utton onClick={() => dispatch(fetchAddr)}>
              GetPosition
            </Button>
          )}
          {errorMessage && <p>{errorMessage}</p>}
        </div>

        <div className="mt-5 flex items-center gap-6">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="size-4 accent-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-0"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.longitude &&
            position.latitude &&
            `${position.longitude} , ${position.latitude}`
          }
        />
        <div className="mt-5">
          {cart.length < 1 ? (
            <Button type="small" to="/menu">
              Cart is empty, go to menu to order!
            </Button>
          ) : (
            <Button disabled={isSubmitting} type="primary">
              {isSubmitting
                ? 'Placing your order'
                : `Order now  total price:${formatCurrency(totalCartPrice + (withPriority ? totalCartPrice * 0.2 : 0))}`}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority,
    position: data.position,
  };
  console.log(data.position);
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Incorrect phone number, please enter a valid phone number';
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
