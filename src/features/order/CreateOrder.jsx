// import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  // useNavigate,
  useNavigation,
} from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const formErrors = useActionData();
  console.log(formErrors);
  // const formErrorsString = JSON.stringify(formErrors);
  console.log(formErrors);
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className="border-4 border-black p-4">
      <h2>Ready to order? Lets go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="ml-2 border-2 border-slate-900"
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="border-2 border-slate-900"
            />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="w-full rounded-full border border-stone-400 px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-0"
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="accent-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-0"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <button
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-yellow-400 p-2 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Placing your order' : 'Order now'}
          </button>
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
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Incorrect phone number, please enter a valid phone number';
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
