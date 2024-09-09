/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { increaseQuantity, decreaseQuantity } from '../cart/cartSlice';
function UpdateItemQuantity({ quantity, pizzaId }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseQuantity(pizzaId));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2">
      <Button type="small" onClick={handleDecrement}>
        -
      </Button>
      <span className="font-bold">
        <h1>{quantity}</h1>
      </span>

      <Button type="small" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
