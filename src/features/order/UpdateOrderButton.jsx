/* eslint-disable no-unused-vars */
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrderButton() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  console.log('update');
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrderButton;
