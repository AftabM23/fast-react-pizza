// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

import UpdateOrderButton from './UpdateOrderButton';
import { getOrder } from '../../services/apiRestaurant';
import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import { useEffect } from 'react';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  return (
    <div className="m-6">
      <div className="flex flex-wrap justify-between">
        <div className="mb-3 flex flex-row gap-2 px-1 font-bold">
          <h1> Order #{id}</h1>
          <h2>Status</h2>
        </div>

        <div className="mb-4 flex gap-4">
          {priority && (
            <span className="tex1 rounded-xl bg-red-500 p-1 px-2 text-xs text-red-200">
              Priority
            </span>
          )}
          <span className="tex1 rounded-xl bg-green-500 p-1 px-2 text-xs text-green-200">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-stone-200 p-5">
        <p className="font- text-l font-bold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <div className="divide-y-2 border-b-2">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)?.ingredients
            }
            isLoadingIngredients={fetcher?.state === 'loading'}
          />
        ))}
      </div>

      <div className="mt-3 bg-stone-200 px-4 py-2">
        <p className="px-2 py-2 text-xs">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="px-2 py-2 text-xs">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="px-2 font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <UpdateOrderButton />
    </div>
  );
}
export async function loader({ params }) {
  const orderDetails = await getOrder(params.orderId);
  return orderDetails;
}
export default Order;
