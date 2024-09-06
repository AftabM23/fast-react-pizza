import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter order #"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="md:h-8 md:w-[20rem]"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
