/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  const hanldeDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button onClick={hanldeDeleteItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
